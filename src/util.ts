export function uniq<T>(a: T[]): T[] {
    return a.filter((item, pos, self) => self.indexOf(item) == pos);
}
