export const transformObjectToArray = <T>(object: Record<string, T>): string[]=>{
  return Object.values(object).join(' ').split('');
}