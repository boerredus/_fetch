function _fetch(url, options) {
    options.mode = !options.mode ? "GET" : options.mode;

    const xml = new XMLHttpRequest();
    xml.open(options.mode, url, true);
    if (options.headers) {
        for (header in options.header)
            xml.setRequestHeader(header, options.header[header]);
    }
    xml.send(options.body ? options.body : null);
    return new Promise(resolve => xml.onload = resolve.bind(xml, xml.responseText))
}