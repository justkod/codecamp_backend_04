// 41. 점수에 따른 등급

function grade(score){
    if(score < 0 || score > 100){
        console.log("잘못된 점수입니다")
        return "잘못된 점수입니다."
    }
    let answer = '';
    
    if(score >= 90){
    answer = 'A'
    }else if(score >= 80){
    answer = 'B'
    }else if(score >= 70){
    answer = 'C'
    }else if(score >= 60){
    answer = 'D'
    }else{
    answer = 'F'
    }


console.log(answer)
}

grade(105)
grade(-5)
grade(80)
