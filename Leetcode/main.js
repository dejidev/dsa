function reverseWords(s) {

    let splited = s.split(" ").reverse()

    let joint = splited.join(" ").toString()

    console.log(joint)

};



reverseWords("Hey are you there")
