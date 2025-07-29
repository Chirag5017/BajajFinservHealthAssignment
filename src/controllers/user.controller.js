import { USER_DETAILS } from "../constant.js";


const getUserDetails = (req,res) => {
    const { data } = req.body;
    if(!data || data.length === 0 || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input format" });
    }

    const evenNumber = [];
    const oddNumber = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;
    let concat = "";

    for(let  i=0;i<data.length;i++) {
        let item = data[i];
        if((item >= 'a' && item <= 'z') || (item >= 'A' && item <= 'Z')) {
            alphabets.push(item.toUpperCase());
            concat+=item;
        } else if(item == "!" || item == "@" || item == "#" || item == "$" || item == "%" || item == "^" || item == "&" 
            || item == "*" || item == "(" || item == ")" || item == "-" || item == "_" || item == "+" || item == "=") {
            specialCharacters.push(item);
        } else {
            item = parseInt(item);
            sum+=item;
            if(item % 2 === 0) {
                evenNumber.push(item.toString());
            } else {
                oddNumber.push(item.toString());
            }
        }
    }

    const reversed = concat.split('').reverse();
    const finalConcat = reversed.map((ch, i) =>
      i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
    ).join('');

    const userDetails = {
       "isSuccess" : "true",
        "userId" : USER_DETAILS.user_id,
        "email" : USER_DETAILS.email,
        "roll_number" : USER_DETAILS.roll_number,
        "odd_number" : oddNumber,
        "even_numbers" : evenNumber,
        "alphabets" : alphabets,
        "special_characters" : specialCharacters,
        "sum" : sum.toString(),
        "concat_string" : finalConcat
    }

    return res.status(200).json({
        userDetails
    })

}

export {
    getUserDetails
}