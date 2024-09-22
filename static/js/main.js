// text animation
let text = document.getElementById('text-input')
let list = ['Python', 'C++', 'Java', 'DSA', 'Machine Learning', 'Data Scince', 'Web devlopment', 'C Programing']
let index = 0
setInterval(() => {
    let getdata = list[(Math.ceil(index % list.length))]
    let i = 0;
    setInterval(() => {
        if (getdata.length > i) {
            if(' ' == getdata[i]){

                text.innerText = `${text.innerText} ${getdata[i+1]}`
                i=i+2;
            }
            else{
                text.innerText = text.innerText + getdata[i];
                i++; 
            }
            
        }
        else{
                clearInterval()
            
        }
    }, 70)

    index++
    text.innerText = ''

}, 1500)


