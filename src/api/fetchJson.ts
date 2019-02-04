export default function fetchJson(path: string): Promise<JSON> {
  return fetch(path).then((data) => data.json());
}
