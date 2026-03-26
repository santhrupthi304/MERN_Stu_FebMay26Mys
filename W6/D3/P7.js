// Introduction to buffers in NodeJS
// A buffer stores raw bytes
// Here we create buffer directly from a string

const textBuffer = Buffer.from("B");

// The value in the buffer is the encode from of the text
console.log("Buffer Object:",textBuffer);
console.log("Buffer Object:",textBuffer.length);
console.log("Byte at index 0:", textBuffer[0]);
console.log("Byte at index 0:", textBuffer[1]);

// Each charecter is stored internally as byte data
// For standard ASCII letters there will be a equivalent code
// Buffer stores numeric value between 0 to 255