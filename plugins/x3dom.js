/**
 @overview Adds X3D / x3dom specific documentation.
 @module x3dom
 @author Christian Stein <chrstein@gmx.net>
 */

exports.handlers =
{
    /*newDoclet: function(e)
    {
        if (typeof e.doclet.description === 'string')
        {
            e.doclet.description = e.doclet.description.toUpperCase();
        }
    }*/
};


/**
 * defines the new tags
 * @param dictionary
 */
exports.defineTags = function(dictionary)
{
    //member is a SF/MF-field
    dictionary.defineTag('field',
    {
        mustHaveValue: false,
        onTagged: function(doclet, tag)
        {
            if(tag)
                doclet.field = true;
        }
    });

    //is the object X3D relative
    dictionary.defineTag('x3d',
    {
        mustHaveValue: true,
        onTagged: function(doclet, tag)
        {
            if(tag.value )
            {
                doclet.x3d = tag.value;
            }
        }
    });

    //to which component does it belong
    dictionary.defineTag('component',
    {
        mustHaveValue: true,
        onTagged: function(doclet, tag)
        {
            if(tag.value )
                doclet.component = tag.value;
        }
    });

    //what implementation status has the component
    dictionary.defineTag('status',
    {
        mustHaveValue: true,
        onTagged: function(doclet, tag)
        {
            if(tag.value)
                doclet.status = tag.value;
        }
    });
}