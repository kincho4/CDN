async function fetchScript() {
    try {
        let response = await fetch('https://raw.githubusercontent.com/SintcoLTD/CDN/main/chrome-extension/sparxmaths-ios/release.json');
        let json = await response.json();

        let js = document.createElement("script");
        js.src = json.contentScript;
        js.async = false;
        js.defer = false;
        document.head.appendChild(js);

        // Call the completion function with the fetched JSON data
        completion(json);
    } catch(err) {
        // Handle any errors that occur during the fetch or execution
        console.error(err);
    }
}

fetchScript();
