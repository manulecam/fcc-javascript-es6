function checkScope() {
let i = '';
  if (true) {
    
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  i = 'function scope';
  return i;
}