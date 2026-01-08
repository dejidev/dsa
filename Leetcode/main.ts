function reverseWords(s: string): string {

    let splited = s.split(" ").reverse()

    let joint = splited.join(" ").toString()

    console.log(joint)

};



reverseWords("Hey are you there")
