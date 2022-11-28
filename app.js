let maiN =  document.querySelector('.main'),
      p1 =  document.querySelector('.pass1'),
      p2 =  document.querySelector('.pass2'),
      p3 =  document.querySelector('.pass3'),
      p4 =  document.querySelector('.pass4'),
      p5 =  document.querySelector('.pass5'),
      p6 =  document.querySelector('.pass6'),
      p7 =  document.querySelector('.pass7'),
      p8 =  document.querySelector('.pass8'),
      p9 =  document.querySelector('.pass9'),
      p10 =  document.querySelector('.pass10');

function gen(params) {
    // function genpass() {
        function makePassword() {
            // for the caps letter
            let alphsCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let alphsCaps_split = alphsCaps.split('');
            let random_num1 = Math.floor(Math.random() * 26);
        
        
            // for the low letters
            let alphsLows = 'abcdefghijklmnopqrstuvwxyz';
            let alphsLows_split = alphsLows.split('');
            let random_num2 = Math.floor(Math.random() * 26);
        
        
            // for the numbers
            let num = '1234567890';
            let num_split = num.split('');
            let random_num = Math.floor(Math.random() * 10);
        
        
            // for the specail characters
            let spec_chars = '!@#$%^&*()_/``+||<>?:;=-';
            let spec_chars_split = spec_chars.split('');
            let sp_ch_lent = spec_chars_split.length - 1; // so we can get the perfect / precise index
            let rand_spec_chars = Math.floor(Math.random() * sp_ch_lent)
        
        
            let all_chars =
                alphsCaps_split[random_num1] +
                alphsLows_split[random_num2] +
                num_split[random_num] +
                spec_chars_split[rand_spec_chars];
        
        
            let all_ch_split = all_chars.split('')
            let all_ch_lent = all_ch_split.length;
            let all_ch_rand = Math.floor(Math.random() * all_ch_lent)
            return all_ch_split[all_ch_rand];
        
            }
        
        // }
        
        
        
        
        
        lopper = 0;
        let times = 10;
        
        let main = setInterval(() => {
            if (lopper < times) {
                lopper++;
                switch (lopper) {
                    case 1:
                        p1.innerHTML = makePassword();
                        break;
                    case 2:
                        p2.innerHTML = makePassword();
                        break;
                    case 3:
                        p3.innerHTML = makePassword();
                        break;
                    case 4:
                        p4.innerHTML = makePassword();
                        break;
                    case 5:
                        p5.innerHTML = makePassword();
                        break;
                    case 6:
                        p6.innerHTML = makePassword();
                        break;
                    case 7:
                        p7.innerHTML = makePassword();
                        break;
                    case 8:
                        p8.innerHTML = makePassword();
                        break;
                    case 9:
                        p9.innerHTML = makePassword();
                        break;
                    case 10:
                        p10.innerHTML = makePassword();
                        break;
                    default:
                        console.log('NOTHING MATCHING');
                        break;
                }
            } else {
                clearInterval(main);
            }
        }, 10);
}



