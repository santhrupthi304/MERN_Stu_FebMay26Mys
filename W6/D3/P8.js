// Allocating buffers

const emptyBuffer = Buffer.alloc(8);
console.log("Contents of emptyBuffer: ",emptyBuffer);
console.log("Allocated buffer bytes:",[...emptyBuffer]);

const textBuffer = Buffer.from([65,66,67]);
console.log("Buffer from byte array: ",textBuffer);

// Buffer.write() writes text into the buffer
const buffer = Buffer.alloc(20);
const bytesWritten = buffer.write("Hello World");
console.log("Bytes written: ",bytesWritten);

// Subarray
const firstSlice = buffer.subarray(3,6);
console.log("First slice is bytes: ",[...firstSlice]);

// Decode the bytes into text: toString()
// console.log("Decode firstslice of buffer: ",firstSlice.subarray(3,6).toString("utf-8"));
console.log("Decode firstslice of buffer: ",firstSlice.toString("utf-8"));