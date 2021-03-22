export const saveToFile = (info) => {
    const keys = Object.keys(info[0]);

    const toTxt = (arr) =>{
        return arr.toString().replaceAll(',','\t')+ "\n"
    }

    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([toTxt(keys), (info.map((obj) => toTxt(Object.values(obj)))).toString().replaceAll(',', '')], {
        type: "text/plain"
    }));
    a.setAttribute("download", "data.txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}