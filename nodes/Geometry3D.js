/////////////////////////////////////////////////////////////////
//                  X3DSpatialGeometryNode                     //
/////////////////////////////////////////////////////////////////
x3dom.registerNodeType(
    "X3DSpatialGeometryNode",
    "Geometry3D",    
    defineClass(x3dom.nodeTypes.X3DGeometryNode,
        /**
         * Constructor for X3DSpatialGeometryNode passing a context object
         * @constructs x3dom.nodeTypes.X3DSpatialGeometryNode
         * @param {Object} [ctx=null] - context object containing initial settings (namespace).     
         * @abstract
         * @extends x3dom.nodeTypes.X3DGeometryNode
         * @classdesc An abstract base class for spatial geometry nodes.
         *            (For field descriptions, see {@link https://github.com Field Description})         
         */
        function (ctx) {
            x3dom.nodeTypes.X3DSpatialGeometryNode.superClass.call(this, ctx);   
        }
    )
);


/////////////////////////////////////////////////////////////////
//                           PLANE                             //
/////////////////////////////////////////////////////////////////
x3dom.registerNodeType(
    "Plane",
    "Geometry3D",   
    defineClass(x3dom.nodeTypes.X3DSpatialGeometryNode,
         /**
         * Constructor for Plane Node passing a context object
         * @constructs x3dom.nodeTypes.Plane
         * @extends x3dom.nodeTypes.X3DSpatialGeometryNode
         * @param {Object} [ctx=null] - context object containing initial settings (namespace).
         * @classdesc A class for a simple plane.
         *            (For field descriptions, see {@link https://github.com Field Description})  
         */
        function (ctx) {
            x3dom.nodeTypes.Plane.superClass.call(this, ctx);

            this.addField_SFVec2f(ctx, 'size', 2, 2);
            this.addField_SFVec2f(ctx, 'subdivision', 1, 1);
            this.addField_SFVec3f(ctx, 'center', 0, 0, 0);
            this.addField_MFString(ctx, 'primType', ['TRIANGLES']);

           //...
        },
        
        {
             fieldChanged: function (fieldName) {
                //...
             }
        }
    )
);


/////////////////////////////////////////////////////////////////
//                            BOX                              //
/////////////////////////////////////////////////////////////////
x3dom.registerNodeType(
    "Box",
    "Geometry3D",
    defineClass(x3dom.nodeTypes.X3DSpatialGeometryNode,             
         /**
         * Constructor for Box Node passing a context object
         * @constructs x3dom.nodeTypes.Box
         * @extends x3dom.nodeTypes.X3DSpatialGeometryNode
         * @param {Object} [ctx=null] - context object containing initial settings (namespace).
         * @classdesc A class for a simple Box.
         *            (For field descriptions, see {@link https://github.com Field Description})  
         */
        function (ctx) {
            x3dom.nodeTypes.Box.superClass.call(this, ctx);

            this.addField_SFVec3f(ctx, 'size', 2, 2, 2);
            this.addField_SFBool(ctx, 'hasHelperColors', false);

            //...
        },
        
        {
            fieldChanged: function(fieldName) {
                //...
            }
        }
    )
);
