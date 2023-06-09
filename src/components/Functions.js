
let id = 1;
export function defineId() {
  const nextId = id;
  id += 1;
  return nextId;
}