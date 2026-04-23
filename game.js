export function generateQuestion(){
  const a = Math.floor(Math.random()*10);
  const b = Math.floor(Math.random()*10);
  return {
    text: `${a} + ${b}`,
    answer: a+b
  };
}