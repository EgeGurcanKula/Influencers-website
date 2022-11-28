const shareButtons = document.querySelectorAll('.tile-share-button')

async function copyText(e) {
    //prevent button going to site
    e.preventDefault()
    const link = this.getAttribute('Link')
    try{
        await navigator.clipboard.writeText(link)
        alert("Link Copied To Clipboard")
    }catch (err) {
        console.error(err)
    }

}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))