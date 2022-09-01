export function hey(message: string): string {
  const normalized = message.trim();
  let response = 'Whatever.';
  if (/.+\?$/.test(normalized)) response = 'Sure.';
  if (/^[^a-z]+[^\?a-z]$/.test(normalized) && /[A-Z]/.test(normalized)) response = 'Whoa, chill out!';
  if (/^[^a-z]+\?$/.test(normalized) && /[A-Z]/.test(normalized)) response = `Calm down, I know what I'm doing!`;
  if (normalized === '' || /^[\n\r\s\t]+$/.test(normalized)) response = 'Fine. Be that way!';
  
  return response;
}
