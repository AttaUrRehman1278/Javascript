const obj = {
    harry: 98,
    rohan: 34,
    atta: 100
}

// let key;
for (let i = 0; i < Object.keys(obj).length ; i++) {
    const element = Object.values(obj[i]);
    console.log(element)
    // console.log(Object.values(obj))
}
