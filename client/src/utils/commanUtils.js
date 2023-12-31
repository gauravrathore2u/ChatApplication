

export const formateDate = (date)=>{
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

    return `${hours<10 ? '0'+hours : hours}:${minutes<10? '0'+minutes : minutes}`;
}



export const onDownloadMedia = (e, urlLink)=>{
    e.preventDefault();
    
    try{
        fetch(urlLink)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = "none";
            a.href = url;

            const duplicateFileName = urlLink.split('/').pop();

            a.download = "" + duplicateFileName + "";

            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);

        }).catch(error => console.log('Error while downloading file', error.message))
    }
    catch(err){
        console.log('Error while downloading file', err.message)
    }
}