function _fetch(url, options) {
    options.mode = options.mode || 'GET';

    const xml = new XMLHttpRequest();
    xml.open(options.mode, url, true);
    
    if (options.headers)
        for (header in options.headers)
            xml.setRequestHeader(header, options.headers[header]);
    
    xml.send(options.body || null);
    return new Promise(resolve => xml.onload = resolve.bind(xml, xml.responseText))
}
