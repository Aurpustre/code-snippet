function main(boxList: string[], ballList: any[]) {
    let result = 0;
    let startIndex = 1;
    let lastPaper: number = 0;
    let numPaper: number = 0;
    boxList = boxList.sort((a: any, b: any) => a[4] - b[4]);

    function handleData() {
        let sign = false;
        const ball0 = ballList[startIndex - 1];
        const ball1 = ballList[startIndex] || '';
        const ball2 = ballList[startIndex + 1] || '';

        const dep0 = Number(ball0[2]);
        const dep1 = Number(ball1[2]);
        const dep2 = Number(ball2[2]);

        const boxItem = ball0[0] + ball1?.[0] + ball2?.[0];
        let existBox = boxList.filter(item => item.includes(boxItem));

        if (!sign && existBox.length) {
            for (let i = 0; i < existBox.length; i++) {
                const target = existBox[i];
                const boxPaper = Number(target[4]);
                const c1 = (boxPaper === 0) && ((dep1 === 0 || dep1 < startIndex) && (dep2 === 0 || dep2 < startIndex));
                const c2 = (boxPaper === 1) && ((dep1 === 0 || dep1 <= startIndex) && (dep2 === 0 || dep2 <= startIndex));
                const c3 = (boxPaper === 2) && ((dep1 === 0 || dep1 < startIndex) && (dep2 === 0 || dep2 <= startIndex + 1));
                if (c1 || c2 || c3) {
                    if ((lastPaper < dep0 && dep0 < startIndex) || (lastPaper < dep1 && dep1 < startIndex) || (lastPaper < dep2 && dep2 < startIndex)) {
                        numPaper += 1;
                        lastPaper = startIndex - 1;
                    }
                    if (boxPaper) {
                        numPaper += 1;
                        lastPaper = startIndex - 1 + boxPaper;
                    }
                    startIndex += 3;
                    sign = true;
                    result += 1;
                    break;
                }
            }
        }

        if (!sign) {
            existBox = boxList.filter(item => item[0] === ball0[0] && item[1] === ball1[0]);
            if (existBox.length) {
                for (let i = 0; i < existBox.length; i++) {
                    const target = existBox[i];
                    const boxPaper = Number(target[4]);
                    if ((dep1 === 0 || dep1 < startIndex) || (boxPaper === 1 && dep1 <= startIndex)) {
                        if ((lastPaper < dep0 && dep0 < startIndex) || (lastPaper < dep1 && dep1 < startIndex)) {
                            numPaper += 1;
                            lastPaper = startIndex - 1;
                        }
                        if (boxPaper) {
                            numPaper += 1;
                            lastPaper = startIndex - 1 + boxPaper;
                        }
                        startIndex += 2;
                        sign = true;
                        result += 1;
                        break;
                    }

                }
            }
        }

        if (!sign) {
            existBox = boxList.filter(item => item[1] === ball0[0] && item[2] === ball1[0]);
            if (existBox.length) {
                for (let i = 0; i < existBox.length; i++) {
                    const target = existBox[i];
                    const boxPaper = Number(target[4]);
                    if ((dep1 === 0 || dep1 < startIndex) || (boxPaper === 2 && dep1 <= startIndex)) {
                        if ((lastPaper < dep0 && dep0 < startIndex) || (lastPaper < dep1 && dep1 < startIndex)) {
                            numPaper += 1;
                            lastPaper = startIndex - 1;
                        }
                        if (boxPaper) {
                            numPaper += 1;
                            lastPaper = startIndex - 1 + boxPaper;
                        }
                        startIndex += 2;
                        sign = true;
                        result += 1;
                        break;
                    }

                }
            }
        }

        if (!sign) {
            existBox = boxList.filter(item => item[0] === ball0[0] && item[2] === ball1[0]);
            if (existBox.length) {
                for (let i = 0; i < existBox.length; i++) {
                    const target = existBox[i];
                    const boxPaper = Number(target[4]);
                    if ((dep1 === 0 || dep1 < startIndex) || ((boxPaper === 1 || boxPaper === 2) && dep1 <= startIndex)) {
                        if ((lastPaper < dep0 && dep0 < startIndex) || (lastPaper < dep1 && dep1 < startIndex)) {
                            numPaper += 1;
                            lastPaper = startIndex - 1;
                        }
                        if (boxPaper) {
                            numPaper += 1;
                            lastPaper = startIndex - 1 + boxPaper;
                        }
                        startIndex += 2;
                        sign = true;
                        result += 1;
                        break;
                    }

                }
            }
        }

        if (!sign) {
            existBox = boxList.filter(item => item.includes(ball0[0]));
            if (existBox.length) {
                for (let i = 0; i < existBox.length; i++) {
                    const target = existBox[i];
                    const boxPaper = Number(target[4]);
                    if (lastPaper < dep0 && dep0 < startIndex) {
                        numPaper += 1;
                        lastPaper = startIndex - 1;
                    }
                    if (boxPaper) {
                        numPaper += 1;
                        lastPaper = startIndex - 1 + boxPaper;
                    }
                    startIndex += 1;
                    sign = true;
                    result += 1;
                    break;

                }
            }
        }
        return startIndex;
    }

    while (startIndex <= ballList.length) {
        handleData();
    }
    console.log(result + ' ' + numPaper);
}


process.stdin.setEncoding('utf8');
const stdin = process.openStdin();
const buff: any[] = [];
process.stdin.on('data', (data: any) => {
    buff.push(data);
})

process.stdin.once('end', () => {
    const stdStr = buff.join('').trim();
    let args: string[] = [];
    let numBox = 0;
    let numBall = 0;
    let boxList: any[] = [];
    let ballList: any[] = [];
    try {
        args = stdStr.split('\n');
        numBox = Number(args[0].split(' ')[0]);
        numBall = Number(args[0].split(' ')[1]);

        for (let i = 1; i < numBox + 1; i++) {
            boxList.push(args[i]);
        }

        for (let i = 1 + numBox; i < numBall + 1 + numBox; i++) {
            ballList.push(args[i]);
        }
    } catch (error) {

    }

    console.time('solutiuon');
    main(boxList, ballList);
    console.timeEnd('solutiuon');
})
