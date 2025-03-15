exports.defineTags = function(dictionary) {
    dictionary.defineTag('feature', {
        mustHaveValue: true,
        onTagged: function(doclet, tag) {
            if (!doclet.features) {
                doclet.features = [];
            }
            doclet.features.push(tag.value);
            
            // Also add to the standard tags section
            if (!doclet.tags) {
                doclet.tags = [];
            }
            doclet.tags.push({
                title: 'feature',
                value: tag.value
            });
        }
    });
};

exports.handlers = {
    newDoclet: function(e) {
        if (e.doclet.features) {
            // Add features section to the main description
            var featuresList = e.doclet.features.map(function(feature) {
                return '<li>' + feature + '</li>';
            }).join('\n    ');
            
            e.doclet.description = (e.doclet.description || '') + 
                '\n<br />\n<br />\n<strong>Features:</strong>\n<ul>\n    ' + featuresList + '\n</ul>';
        }
    }
};