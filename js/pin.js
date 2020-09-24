const mustNumber = (e) => {
    const value = e.value
    if(isNaN(parseInt(value))) {
        return e.value = ""
    } 

    const nextInput = document.getElementsByTagName('input')
    for (let i = 0; i < nextInput.length; i++) {
       if(nextInput[i].value && i != nextInput.length-1) {
           nextInput[i+1].focus()
       }

       if(!nextInput[i].value) {
            nextInput[i].addEventListener('keydown', e => {
                if(e.key == 'Backspace' || e.key == 'Delete') {
                    if(i == nextInput.length-1 && nextInput[i].value) {
                        nextInput[i].value = ""
                    } else if(nextInput[i].value) {
                        nextInput[i].value = ""
                    } else {
                        nextInput[i-1].focus()
                    }
                }
            })
       }
    }
}

