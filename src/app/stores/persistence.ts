export function readStore(name: string): Promise<string> {
  return new Promise((resolve) => {
    const data = localStorage.getItem(name);
    resolve(data);
  });
}

export function writeStore(name: string, value: string): Promise<void | Error> {
  return new Promise((resolve) => {
    localStorage.setItem(name, value);
    resolve();
  });
}