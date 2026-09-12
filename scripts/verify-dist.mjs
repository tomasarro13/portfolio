/**
 * Post-build security check.
 * The Content-Security-Policy in public/_headers forbids inline scripts and
 * styles. This script fails if the generated HTML would be blocked by it, or
 * if the headers file is missing from the output.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = 'dist';
const problems = [];

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return htmlFiles(path);
      return entry.name.endsWith('.html') ? [path] : [];
    }),
  );
  return nested.flat();
}

const rules = [
  { pattern: /<script(?![^>]*\ssrc=)[^>]*>/i, message: 'inline <script> (blocked by CSP)' },
  { pattern: /<style[\s>]/i, message: 'inline <style> (blocked by CSP)' },
  { pattern: /\sstyle="/i, message: 'inline style attribute (blocked by CSP)' },
  { pattern: /\son[a-z]+="/i, message: 'inline event handler (blocked by CSP)' },
  { pattern: /href="(?:javascript|data):/i, message: 'unsafe link scheme' },
  { pattern: /\b(?:src|href)="http:\/\//i, message: 'insecure http:// resource' },
];

for (const file of await htmlFiles(DIST)) {
  const html = await readFile(file, 'utf8');
  for (const { pattern, message } of rules) {
    if (pattern.test(html)) problems.push(`${file}: ${message}`);
  }
}

try {
  const headers = await readFile(join(DIST, '_headers'), 'utf8');
  for (const header of [
    'Content-Security-Policy',
    'Strict-Transport-Security',
    'X-Content-Type-Options',
  ]) {
    if (!headers.includes(header)) problems.push(`_headers: missing ${header}`);
  }
} catch {
  problems.push('dist/_headers not found: security headers would not be applied');
}

if (problems.length > 0) {
  process.stderr.write(`Security check failed:\n- ${problems.join('\n- ')}\n`);
  process.exit(1);
}

process.stdout.write(
  'Security check passed: output is compatible with the Content-Security-Policy.\n',
);
