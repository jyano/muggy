
objects()
function objects(){
    COLOR={

        b:"Blue", cB:"CadetBlue", wb:"AliceBlue" ,rB:"RoyalBlue", stB:"SteelBlue",
        slB:"SlateBlue", dB:"DodgerBlue", mB:"MediumBlue",
        cB:"CornflowerBlue", mSB:"MediumSlateBlue", bA:"BlanchedAlmond",
        sB:"SkyBlue", _b:"LightBlue", dSB:"DeepSkyBlue", mB:"MidnightBlue",
        nv:"Navy", B:"DarkBlue", pB:"PowderBlue",
        _sB:"LightSteelBlue",
        _sB:"LightSkyBlue",
        g:'green', sG:"SeaGreen",  hD:"HoneyDew",  lC:"LightCyan",spG:"SpringGreen",lm:"Lime",  G:"DarkGreen", fG:"ForestGreen", mSG:"MediumSpringGreen", pG:"PaleGreen",_g:"LightGreen", yG:"YellowGreen", lG:"LawnGreen", lG:"LimeGreen", gY: "GreenYellow",mSG:"MediumSeaGreen", _sG:"LightSeaGreen", mAM:"MediumAquaMarine", aM:"Aquamarine", SG:"DarkSeaGreen", ol:"Olive", oD:"OliveDrab", OG:"DarkOliveGreen",
        sv:"Silver", gr:"gray", Gr:"DarkGray", _gr:"LightGray", dSB:"DarkSlateBlue", dSG:"DarkSlateGray", _SG:"LightSlateGray", sG:"SlateGray", dG:"DimGray",
        az:"Azure", c:"Coral", _c:"LightCoral",
        cy:"Cyan", Cy: "DarkCyan", tq:"Turquoise",
        mT:"MediumTurquoise", pT:"PaleTurquoise ", Tq:"DarkTurquoise",
        aq:"Aqua", gb:"Gainsboro", tl:"Teal", go:"Gold",
        X:"transparent", z:"Black", w:"White",
        k:"Khaki", K:"DarkKhaki", tn:"Tan",br:"Brown",

        mc:"Moccasin", ct:"Chartreuse",
        bW:"BurlyWood",
        o:"Orange", O:"DarkOrange",
        y:"Yellow",_y:"LightYellow", yC:"LemonChiffon",
        gR:"GoldenRod", GR:"DarkGoldenRod",
        pGR:"PaleGoldenRod", _GRY:"LightGoldenRodYellow",

        nW:"NavajoWhite ",bq:"Bisque", bg:"Beige",
        wh:"Wheat",
        pp:"PeachPuff", u:"Purple",ui:"Indigo",
        pl:"Plum",mP:"MediumPurple",
        v:"Violet", bV:"BlueViolet",
        dV:"DarkViolet",
        vr:"MediumVioletRed", vrl:"PaleVioletRed",
        wS:"WhiteSmoke",
        fW:"FloralWhite", gW:"GhostWhite",
        wa: "Cornsilk", iv:"Ivory", ln:"Linen",
        mC:"MintCream", pW:"PapayaWhip", oL:"OldLace",
        aW:"AntiqueWhite", ss:"SeaShell",

        sn:"Snow",
        ch:"Chocolate",
        si:"Sienna",

        pe:"Peru",
        rBr:"RosyBrown",
        saBr:"SandyBrown",
        sBr:"SaddleBrown",

        l:'Lavender', lB:"LavenderBlush", m:"Magenta",M:"DarkMagenta",
        or:"Orchid", mO:"MediumOrchid",
        fu:"Fuchsia",OR:"DarkOrchid",
        p:"Pink", _p:"LightPink", hP:"HotPink", mR:"MistyRose ",

        th:"Thistle",

        x:"DeepPink",

        r:"Red", mrn:"Maroon",
        rcr:"Crimson", R:"DarkRed", oR:"OrangeRed",
        ri:"IndianRed",
        rt:"Tomato",
        rfb:"FireBrick", s:"Salmon",
        _s:"LightSalmon",  S:"DarkSalmon"


    }
    CSS={

        flD: 'flex-direction',
        flW: 'flex-wrap' ,
        flJC: 'justify-content' ,
        f:'font', ff:'font-family', fc:'@font-face', // for font files
        fz:'font-size',//xx-small,x-small,small,medium,large,x-large,xx-large//smaller,larger
        fs:'font-style', //normal,oblique,italic
        fv:'font-variant', //normal,smallcaps
        fw:'font-weight',//normal,bold,100-900
        fh:'font-stretch',
        lh:'line-height',  //minimum distance between the baselines of adjacent lines of text
        ta:'text-align',         //left, right, center and justify
        td:'text-decoration',     // underline, overline, line-through, blink
        ti:'text-indent',    // indent for the first line of a block level element
        ttf:'text-transform',   //none,uppercase,lowercase,capitalize
        tl:'text-outline',  to:'text-overflow',   tsh:'text-shadow', lts:'letter-spacing',   ws:'word-spacing',
        va:'vertical-align', //baseline,superscript,subscript,middle,text-top,text-bottom,top,bottom
        wsp:'white-space', //normal,nowrap,pre,pre-wrap,pre-line,inherit
        wb:'word-break', // normal|break-all|keep-all
        ww:'word-wrap',  //normal,break-word
        of:'overflow',   ofx:"overflow-x",  ofy:"overflow-y", //visible | hidden | scroll | auto | inherit
        bg:'background',  C:'background-color',   bi:"background-image", bga:"background-attachment",  bp:"background-position", bgr:"background-repeat", bgl:"background-clip", bgo:"background-origin",   bgz:"background-size",


        d:"border",
        bor:"border",
        B:"border",
        dc:"border-color",
        //ds:"border-style",
        dw:"border-width",
        co:'border-collapse',
        sp:'border-spacing',

        bT:"border-top",
        dtc:"border-top-color",dts:"border-top-style",
        dtw:"border-top-width",   bt:"border-top-width",


        bB:"border-bottom",dbc:"border-bottom-color",
        dbs:"border-bottom-style",bb:"border-bottom-width",


        dbw:"border-bottom-width",dr:"border-right",drc:"border-right-color",drs:"border-right-style",

        drw:"border-right-width",    br:"border-right-width",


        borR:'border-radius',

        rd:'border-radius',

        bL:"border-left",
        dlc:"border-left-color",
        dls:"border-left-style",

        bLW:"border-left-width",





        di:"border-image",dis:"border-image-source", dio:"border-image-outset",dir:"border-image-repeat", disl:"border-image-slice", diw:"border-image-width",






        $:'flex', _:'order',
        $f:'flex-flow',

        $d:'flex-direction',
        $w:'flex-wrap',

        g:"padding",
        pad:"padding",P:'padding',
        gt:"padding-top",
        gr:"padding-right",gb:"padding-bottom",gl:"padding-left",

        m:"margin",
        mar:"margin",
        M:"margin",

        mT:"margin-top",mR:"margin-right",mB:"margin-bottom", mL:'margin-left',



        o:"outline",oc:"outline-color",os:"outline-style",ow:'outline-width',   oo:'outline-offset',
        li:"list-style-image",
        lp:"list-style-position",
        ct:'content',      //pseudoelements
        a:'opacity',xs:"box-shadow", //s.s('xs','10px 10px 5px #888888').res

        h:'height',mh:'max-height',nh:'min-height',
        w:'width',Mw:'max-width',mw:'min-width',
        r:'right',t:'top',p:'position',v:'visibility',z:'z-index',
        crp:"crop",ps:"perspective",po:"perspective-origin",
        tr:"transition",ty:"transition-property",tu:"transition-duration",tt:"transition-timing-function",te:"transition-delay",tf:"transform", tfo:"transform-origin", ts:"transform-style",bv:"backface-visibility",
        ft:'fit',//replaced elements
        s:"size", b:"bottom",
        cl:"clear",
        clp:'clip',u:'cursor',
        ds:'display',
        fl:'float',l:'left',
        cs:'caption-side', //table caption
        ec:'empty-cells',  //table
        ly:'table-layout',
        c:'color',
        rs:'resize'  //resizable by user






    }
    css=function(){

        FLOAT={  r:'right',  l:'left',  n:'none',  '#':'inherit'}

        OLSTYLE={ n:'none',  h:'hidden',  '.':'dotted',  '-':'dashed',  s:'solid',   d:'double',  g:'groove',  r:'ridge',  i:'inset',     o:'outset',   "#":'inherit' }

        OLWIDTH={'|':'thin', '||':'medium', '|||':'thick',   's':'thin',   'm':'medium',  'b':'thick'  }

        DISPLAY={

            i:"inline",b:"block",ib:"inline-block",t:"table",n:"none",'#':"inherit",it:"inline-table",
            l:"list-item",c:"table-column",r:"table-row",cg:"table-column-group",rg:"table-row-group",
            p:"table-caption",
            h:"table-header-group",f:"table-footer-group",e:"table-cell",
            $:'flex'

        }

        POSITION={s:'static',a:'absolute',r:'relative',f:'fixed','#':'inherit'}
        OVERFLOW={v:'visible',h:'hidden',s:'scroll',a:'auto','#':'inherit'}
        CURSOR={
            d:'default',p:'pointer',m:'move',w:'wait', h:'help',t:'text',
            N:'n-resize',E:'e-resize',S:'s-resize', W:'w-resize',
            NE:'ne-resize',NW:'nw-resize',SE:'se-resize',SW:'sw-resize'}
        ROLE={n:'navigation',d:'dialog'}



    };css()
    html=function(){
        INPUT={
            b:"button",c:"checkbox", f:"file",g:'range',e:'email',h:"hidden",i:"image",p:"password",r:"radio",R:"reset",s:"submit",t:"text"}

        PROPERTY={t:'type',c:'checked',i:'id',v:'value',n:'name'}
        ATTRIBUTE={
            a:'action',
            d:'disabled',
            R:'rows',C:'cols',

            dd:'data-dismiss',dt:'data-toggle',dg:'data-target',

            b:'data-bind',
            f:'for',
            w:'width',h:'height',

            i:'id',
            k:'class',
            m:'method',n:'name',  ph:'placeholder',r:'role',
            s:'src',
            t:'type', T:'title',
            ti:'tabindex',
            u:'href',v:'value'}
        TAG={

            a:'a',
            A:'article',
            b:'button',
            B:'b',
            br:'br',
            c:'canvas',
            d:'div',
            dl:'dl',
            dt:'dt',
            f:'form',
            F:'footer',
            fs:'fieldset',
            g:'img',
            hr:'hr',
            i:'input',
            I:'iframe',
            H:'header',
            I:'iframe',
            sl:'select',
            li:'li',
            lb:'label',
            N:'nav',
            o:'ol',
            op:'option',
            p:'p',
            s:'span',
            ta:'textarea',
            th:'th',
            td:'td',

            t:'table',
            u:'ul',
            v:'video',
            y:'style',

            '1':'h1',
            '2':'h2',
            '3':'h3',
            '4':'h4',
            '5':'h5',
            '6':'h6'



        }

    };html()
    CSSTextFont=function(){
        FONTFAMILY={u:"cursive",f:"fantasy",m:'monospace',ss:'sans-serif',s:'serif',//generic
            t:'times',c:'courier',a:'arial' }//nongeneric
        FONTVARIANT={ s:"small-caps"}
        FONTSTYLE={"#":"inherit",n:"normal",i:"italic",o:"oblique"}
        FONTWIDTH={n:"normal", "+":"bold", "++":"bolder","-":"lighter", "*1":100,"*2":200, "*3":300,"*4":400, "*5":500, "*6":600, "*7":700,"*8":800, "*9":900}
        TEXTTRANSFORM={c:"capitalize",u:"uppercase",l:"lowercase"}
        FONTSTRETCH={n:"normal",sc:"semi-condensed",c:"condensed",ec:"extra-condensed",uc:"ultra-condensed",se:"semi-expanded",e:"expanded",  ee:"extra-expanded",ue:"ultra-expanded"}
        TEXTDECORATION={u:"underline",o:"overline",l:"line-through",b:"blink"}
        TEXTALIGNMENT={l:"left",r:"right",c:"center",j:"justify"}
        TEXTBASELINE={s:'sub',S:'super',t:'top',tt:'text-top',m:'middle',b:'bottom',tb:'text-bottom'}
    };CSSTextFont()
    Events={$:'click', $$:'dblclick', d:'mousedown', o:'mouseout',v:'mouseover',
        ro:'rollout',rv:'rollover', m:'pressmove', u:'pressup', e:"mouseenter", l:"mouseleave",
        sd:"stagemousedown", sm:"stagemousemove",su:"stagemouseup",
        de:"drawend",ds:"drawstart", t:'tick',te:"tickend", ts:"tickstart"
    }
    EVENT={

        '1':'one',
        '/':'change',
        b:'blur',
        kd:'keydown',
        ku:'keyup',
        kp:'keypress',


        '$':'click', '$$':'dblclick',

        o:'mouseout',
        v:'mouseover',
        ro:'rollout',
        rv:'rollover',
        a:'animationend',

        d:'mousedown',
        pm:'pressmove',
        pu:'pressup',

        D:"stagemousedown",  M:"stagemousemove",  U:"stagemouseup",


        m:'mousemove',
        u:'mouseup',


        e:'mouseenter',
        l:'mouseleave',

        f:'focus',
        fi:'focusin',
        fo:'focusout',

        de:"drawend",ds:"drawstart",
        t:'tick',te:"tickend",ts:"tickstart",

        h:'hover',
        sm:'submit',
        s:'submit','@':'load',
        r:'ready',R:'Rotation',S:'scroll',
        y:'select',

        z:'resize'
    }
    ctx=function(){
        XMET={
            a:'arc',
            a2:'arcTo',
            b:'beginPath',
            c:'closePath',
            d:'drawImage',
            f:'fill',fr:'fillRect',ft:'fillText',
            j:'clip',
            l:'lineTo',
            m:'moveTo',
            mt:"measureText",
            s:'stroke',
            sr:'strokeRect',
            st:'strokeText',
            g:'createLinearGradient',
            rg:'createRadialGradient',
            r:'rect',
            S:'save',
            R:'restore',
            sc:'scale',
            tr:'translate',
            rt:'rotate',
            p:'createPattern',
            P:'putImageData',
            G:'getImageData',
            C:'createImageData',
            ip:'isPointInPath',
            is:'isPointInStroke',
            t:'transform',
            st:'setTransform',
            q:'quadraticCurveTo',
            z:'bezierCurveTo',
            x:'clearRect'
        }
        XPOP={
            a:'globalAlpha',b:'textBaseline',
            f:'fillStyle',s:'strokeStyle',w:'lineWidth',
            p:'lineCap',
            j:'lineJoin',
            m:'miterLimit',
            g:'globalCompositeOperation',
            c:'shadowColor',b:'shadowBlur',x:'shadowOffsetX',y:'shadowOffsetY',
            t:'textAlign',fo:'font'
        }
        GCO={
            s:'source-over',a:'source-atop',o:'source-out',i:'source-in',
            d:'destination-over',da:'destination-atop',do:'destination-out',di:'destination-in',
            l:'lighter',x:'xor',c:'copy'
        }

        LINEJOIN={r:'round',b:'bevel',m:'miter'}
        LINECAP={r:'round',b:'butt',s:'square'}
        PATTERN={r:'repeat',x:'repeat-x',y:'repeat-y',z:'no-repeat'}


    };ctx()
    BINDINGS={t:'text', h:'html', s:'css', y:'style', a:'attr',
        E:'foreach', fe:'foreach', i:'if', I:'ifnot', w:'with', $:'click', e:'event',
        S:'submit', ea:'enable', da:'disable', v:'value', V:'value', vu:'valueUpdate',
        vs:'visible', hf:'hasFocus',
        ch:'checked', c:'checked',
        o:'options', so:'selectedOptions', ot:'optionsText',
        un:'uniqueName',
        T:'template'
    }
    easel=function(){

        JMET={

            tb:'getTransformedBounds',

            iv:'isVisible',

            gs:'getStage',

            cdu:'getCacheDataURL',

            gm:'getMatrix',

            gcm:'getConcatenatedMatrix',

            lg:'localToGlobal',ll:'localToLocal',gl:'globalToLocal',

            cc:'cacheCanvas',

            cd:'suppressCrossDomainErrors',

            me:'mouseEnabled',
            fi:'filters',
            ha:'hitArea',

            ci:'cacheID',

            al:'alpha',

            ma:'mask',
            n:'name',
            co:'compositeOperation',
            pa:'parent',
            rt:'rotation',
            tl:'translate',

            sx:'scaleX',sy:'scaleY',kx:'skewX',ky:'skewY',rx:'regX',ry:'regY',

            ot:'onTick',

            cu:'cursor',

            vs:'visible',

            sd:'shadow',



            cl:'clone',

            ht:'hitTest',

            st:'setTransform',

            ca:'cache',uc:'updateCache',C:'uncache',

            md:'onMouseDown',

            sb:'setBounds',gb:'getBounds',

            w:'width',
            h:'height'

        }
        EASE={l:'linear',n:'none',

            bI: 'backIn', bO:'backOut', bIO:'backInOut',
            bnI:'bounceIn',bnO:'bounceOut',bnIO:'bounceInOut',

            cI:'circIn',cO:'circOut',cIO:'circInOut',
            cbI:'cubicIn',cbO:'cubicOut',cbIO:'cubicInOut',


            // gBI:'getBackIn',gBO:'getBackOut',gBIO:'getBackInOut',
            // gEI:'getElasticIn', gEO:'getElasticOut', gEIO:'getElasticInOut',
            //gPI:'getPowIn', gPO:'getPowOut',  gPIO:'getPowInOut',

            qI:'quartIn', qO:'quartOut',  qIO:'quartInOut',
            qdI:'quadIn', qdIO:'quadInOut',  qdO:'quadOut',
            qnI:'quintIn', qnO:'quintOut', qnIO:'quintInOut',



            eI:'elasticIn', eO:'elasticOut', eIO:'elasticInOut',

            sI:'sineIn', sO:'sineOut',  sIO:'sineInOut'}


        CREATE={

            tb:'getTransformedBounds', iv:'isVisible', gs:'getStage',
            cdu:'getCacheDataURL', gm:'getMatrix',
            cm:'getConcatenatedMatrix',
            lg:'localToGlobal', ll:'localToLocal', gl:'globalToLocal',
            cc:'cacheCanvas',
            cd:'suppressCrossDomainErrors',
            me:'mouseEnabled',
            fi:'filters',
            ha:'hitArea',
            ci:'cacheID',
            al:'alpha',
            ma:'mask',
            n:'name',
            co:'compositeOperation',
            pa:'parent',
            rx:'regX',ry:'regY',rt:'rotation',
            sx:'scaleX',sy:'scaleY',
            kx:'skewX',
            ky:'skewY',
            ot:'onTick',
            cu:'cursor',
            vs:'visible',
            sd:'shadow',
            ca:'cache',
            cl:'clone',
            ht:'hitTest',
            st:'setTransform',
            upc:'updateCache',uc:'uncache',
            tl:'translate',
            omd:'onMouseDown',
            sb:'setBounds',
            gb:'getBounds',
            w:'width',
            h:'height',
            a:'addChild', ac:'autoClear', aca:'addChildAt',
            ch:'children', gcn:'getChildByName',gci:'getChildIndex',
            cl:'clear',ct:'contains',
            du:'toDataURL',
            ede:'enableDOMEvents',emo:'enableMouseOver',
            gca:'getChildAt', gnc:'getNumChildren',he:'handleEvent',
            mc:'mouseChildren',mx:'mouseX',my:'mouseY', mmo:'mouseMoveOutside',mib:'mouseInBounds',
            ns:'nextStage',
            sci:'setChildIndex',
            sc:'sortChildren',
            sw:'swapChildren',
            swa:'swapChildrenAt',
            tou:'tickOnUpdate',
            oup:'getObjectsUnderPoint',
            rc:'removeChild',rca:'removeChildAt',rac:'removeAllChildren',
            u:'update',
            vs:'visible'
        }

    };easel()
    bootStrap=function(){
        CLASS={

            ar:'arrow',af:'affix',A:'active',
            a:'alert',al:'alert-link',ad:'alert-dismissable',as:'alert-success',ai:'alert-info',aw:'alert-warning',ad:'alert-danger',
            ba:'badge',bc:'breadcrumb',B:'bottom',
            b:'btn',bd:'btn-default',bp:'btn-primary', bw:'btn-warning',  bd:'btn-danger', bs:'btn-success',  bi:'btn-info', ba:'btn-link',
            bl:'btn-lg', bx:'btn-xs', bb:'btn-block', bg:'btn-group',bgj:'btn-group-justified',bgv:'btn-group-vertical',
            bt:'button', bdf:'button-default', btp:'button-primary',
            C:'caret', bm:'btn-mini',


            c:'c',

            ct:'container',cl:'close',ctl:'control-label',ca:'caption',co:'collapse',coi:'collapsing',


            cb:'checkbox',cbi:'checkbox-inline',
            cs:'carousel',csi:'carousel-inner',csi:'carousel-indicators',csc:'carousel-caption',csc:'carousel-control',
            D:'divider',dt:'data-toggle',dg:'data-target',
            dd:'dropdown',ddm:'dropdown-menu',ddh:'dropdown-header',ddb:'dropdown-backdrop',ddt:'dropdown-toggle',

            f:'form',fa:'fade', F:'footer', mk:'marketing',

            fg:'form-group',fc:'form-control',fcs:'form-control-static',





            g:'glyphicon',




            h:'hide', hd:'hidden',hdx:'hidden-xs',hds:'hidden-sm',
            hdm:'hidden-md',hdl:'hidden-lg',hdp:'hidden-print',
            hb:'help-block',h6:'h6',h1:'h1',h2:'h2',h3:'h3',h4:'h4',h5:'h5',

            H:'header',
            I:'item',ib:'icon-bar',in:'icon-next',i:'in',iv:'invisible',it:'initialism',
            iR:'img-responsive',ir:'img-rounded',ith:'img-thumbnail',ic:'img-circle',
            is:'input-sm',il:'input-lg',ig:'input-group', igb:'input-group-btn',iga:'input-group-addon',
            j:'jumbotron',     np:'nav-pills',
            L:'left',le:'lead',
            l:'label',ld:'label-default',lp:'label-primary',ls:'label-success',li:'label-info',lw:'label-warning',ld:'label-danger',
            lu:'list-unstyled',li:'list-inline',lg:'list-group',lgi:'list-group-item',lgih:'list-group-item-heading',lgit:'list-group-item-text',
            me:'media',meb:'media-body',meo:'media-object',meh:'media-heading',mel:'media-list',
            m:'modal', mo:'modal-open',md:'modal-dialog',mc:'modal-content',
            mbd:'modal-backdrop',mh:'modal-header',mt:'modal-title',
            mb:'modal-body',mf:'modal-footer',
            N:'next',n:'nav',nd:'nav-divider',nt:'nav-tabs',nj:'nav-justified',ntj:'nav-tabs-justified',
            nb:'navbar',nbn:'navbar-nav',nbr:'navbar-right',nbl:'navbar-left',nbfb:'navbar-fixed-bottom',nbft:'navbar-fixed-top',  nbst:'navbar-static-top',
            nbB:'navbar-brand', nbb:'navbar-btn',nbh:'navbar-header',nbc:'navbar-collapse',
            nbg:'navbar-toggle',nbf:'navbar-form', nbt:'navbar-text', nbd:'navbar-default', nbl:'navbar-link', nbi:'navbar-inverse',
            P:'prev',p:'progress',pi:'pill-pane',pr:'pull-right',pl:'pull-left',
            pn:'panel',pnb:'panel-body',pnd:'panel-default',pnD:'panel-danger',pnf:'panel-footer',
            pnh:'panel-heading',pni:'panel-info',pnp:'panel-primary',pns:'panel-success',pnt:'panel-title',pnw:'panel-warning',
            po:'popover',pot:'popover-title',poc:'popover-content',
            pb:'progress-bar',pbs:'progress-bar-success',pbi:'progress-bar-info',pbw:'progress-bar-warning',pbd:'progress-bar-danger',
            pp:'prettyprint',ps:'pre-scrollable',pg:'pager',pgn:'pagination',pgh:'page-header',
            r:'row',R:'right',
            s:'submit',
            sr:'sr-only',s:'show',
            T:'top', tn:'thumbnail',
            tm:'text-muted', tp:'text-primary', tw:'text-warning', td:'text-danger',th:'text-hide', ts:'text-success', ti:'text-info', tl:'text-left', tr:'text-right', tc:'text-center',
            t:'table',tb:'table-bordered',tr:'table-responsive',
            tt:'tooltip',tti:'tooltip-inner',tta:'tooltip-arrow',
            vx:'visible-xs',vs:'visible-sm',vm:'visible-md',vl:'visible-lg',vp:'visible-print',
            w:'well',wl:'well-lg',ws:'well-sm',   btb:'btn-toolbar',bm:'btn-mini',fi:'form-inline',

            x1:'col-xs-1',x2:'col-xs-2',x3:'col-xs-3',x4:'col-xs-4',x5:'col-xs-5',x6:'col-xs-6',x7:'col-xs-7',x8:'col-xs-8',x9:'col-xs-9',x10:'col-xs-10',x11:'col-xs-11',x12:'col-xs-12',
            s1:'col-sm-1',s2:'col-sm-2',s3:'col-sm-3',s4:'col-sm-4',s5:'col-sm-5',s6:'col-sm-6',s7:'col-sm-7',s8:'col-sm-8',s9:'col-sm-9',s10:'col-sm-10',s11:'col-sm-11',s12:'col-sm-12',
            sP0:'col-sm-push-0',sP1:'col-sm-push-1',sP2:'col-sm-push-2',sP3:'col-sm-push-3',sP4:'col-sm-push-4',sP5:'col-sm-push-5',sP6:'col-sm-push-6',sP7:'col-sm-push-7',sP8:'col-sm-push-8',sP9:'col-sm-push-9',sP10:'col-sm-push-10',sP11:'col-sm-push-11',
            sp0:'col-sm-pull-0',sp1:'col-sm-pull-1',sp2:'col-sm-pull-2',sp3:'col-sm-pull-3',sp4:'col-sm-pull-4',sp5:'col-sm-pull-5',sp6:'col-sm-pull-6',sp7:'col-sm-pull-7',sp8:'col-sm-pull-8',sp9:'col-sm-pull-9',sp10:'col-sm-pull-10',sp11:'col-sm-pull-11',
            so0:'col-sm-offset-0',so1:'col-sm-offset-1',so2:'col-sm-offset-2',so3:'col-sm-offset-3',so4:'col-sm-offset-4',so5:'col-sm-offset-5',so6:'col-sm-offset-6',so7:'col-sm-offset-7',so8:'col-sm-offset-8',so9:'col-sm-offset-9',so10:'col-sm-offset-10',so11:'col-sm-offset-11',
            m1:'col-md-1',m2:'col-md-2',m3:'col-md-3',m4:'col-md-4',m5:'col-md-5',m6:'col-md-6',m7:'col-md-7',m8:'col-md-8',m9:'col-md-9',m10:'col-md-10',m11:'col-md-11',m12:'col-md-12',
            mP0:'col-md-push-0',mP1:'col-md-push-1',mP2:'col-md-push-2',mP3:'col-md-push-3',mP4:'col-md-push-4',mP5:'col-md-push-5',mP6:'col-md-push-6',mP7:'col-md-push-7',mP8:'col-md-push-8',mP9:'col-md-push-9',mP10:'col-md-push-10',mP11:'col-md-push-11',
            mp0:'col-md-pull-0',mp1:'col-md-pull-1',mp2:'col-md-pull-2',mp3:'col-md-pull-3',mp4:'col-md-pull-4',mp5:'col-md-pull-5',mp6:'col-md-pull-6',mp7:'col-md-pull-7',mp8:'col-md-pull-8',mp9:'col-md-pull-9',mp10:'col-md-pull-10',mp11:'col-md-pull-11',
            mo0:'col-md-offset-0',mo1:'col-md-offset-1',mo2:'col-md-offset-2',mo3:'col-md-offset-3',mo4:'col-md-offset-4',mo5:'col-md-offset-5',mo6:'col-md-offset-6',mo7:'col-md-offset-7',mo8:'col-md-offset-8',mo9:'col-md-offset-9',mo10:'col-md-offset-10',mo11:'col-md-offset-11',
            l1:'col-lg-1',l2:'col-lg-2',l3:'col-lg-3',l4:'col-lg-4',l5:'col-lg-5',l6:'col-lg-6',l7:'col-lg-7',l8:'col-lg-8',l9:'col-lg-9',l10:'col-lg-10',l11:'col-lg-11',l12:'col-lg-12',
            lP0:'col-lg-push-0',lP1:'col-lg-push-1',lP2:'col-lg-push-2',lP3:'col-lg-push-3',lP4:'col-lg-push-4',lP5:'col-lg-push-5',lP6:'col-lg-push-6',lP7:'col-lg-push-7',lP8:'col-lg-push-8',lP9:'col-lg-push-9',lP10:'col-lg-push-10',lP11:'col-lg-push-11',
            lp0:'col-lg-pull-0',lp1:'col-lg-pull-1',lp2:'col-lg-pull-2',lp3:'col-lg-pull-3',lp4:'col-lg-pull-4',lp5:'col-lg-pull-5',lp6:'col-lg-pull-6',lp7:'col-lg-pull-7',lp8:'col-lg-pull-8',lp9:'col-lg-pull-9',lp10:'col-lg-pull-10',lp11:'col-lg-pull-11',
            lo0:'col-lg-offset-0',lo1:'col-lg-offset-1',lo2:'col-lg-offset-2',lo3:'col-lg-offset-3',lo4:'col-lg-offset-4',lo5:'col-lg-offset-5',lo6:'col-lg-offset-6',lo7:'col-lg-offset-7',lo8:'col-lg-offset-8',lo9:'col-lg-offset-9',lo10:'col-lg-offset-10',lo11:'col-lg-offset-11',}
        GLYPH={


            a:'asterisk',aj :'adjust',
            alc:'align-center', alj:'align-justify', all:'align-left', alr:'align-right',
            ad:'arrow-down', al:'arrow-left', ar:'arrow-right', au:'arrow-up',




            b:'backward',
            bn:'ban-circle', bc:'barcode', be:'bell',

            bo:'bold',
            bk:'book',

            bm:'bookmark', bf:'briefcase', bh:'bullhorn',


            c:'comment',
            ct:'certificate',

            chd:'chevron-down', chl:'chevron-left', chr:'chevron-right', chu:'chevron-up',


            ca:'calendar', cm:'camera',  ch:'check',


            cad:'circle-arrow-down', cal:'circle-arrow-left', car:'circle-arrow-right', cau:'circle-arrow-up',

            cl:'cloud', cdl:'cloud-download',

            cul:'cloud-upload', cg:'cog',

            cld:'collapse-down', clu:'collapse-up',

            cmp:'compressed',

            cpr:'copyright-mark', cc:'credit-card', ct:'cutlery',





            db:'dashboard', d:'download',


            d2:'download-alt',


            e:'envelope',
            ep:'earphone', ed:'edit', ej:'eject', eu:'euro',

            es:'exclamation-sign', ep:'expand',
            ex:'export', ec:'eye-close', eo:'eye-open',


            f:'forward',
            ftv:'facetime-video',


            fbw:'fast-backward', ffw:'fast-forward',

            fi:'file', fm:'film',
            flt:'filter', fr:'fire', fg:'flag', fl:'flash',




            ft:'font',fc:'folder-close',fo:'folder-open',


            fs:'fullscreen',

            fd:'floppy-disk',fdo:'floppy-open', fdr:'floppy-remove', fds:'floppy-save', fdv:'floppy-saved',





            g:'globe', gb:'gbp', gi:'gift', gl:'glass',

            h:'home',
            hd:'hand-down', hl:'hand-left', hr:'hand-right', hu:'hand-up',
            hdv:'hd-video', hdd:'hdd',
            hdr:'header', hph:'headphones', he:'heart', hee:'heart-empty',



            i:'info-sign', ip:'import', ib:'inbox', il:'indent-left', ir:'indent-right',

            it:'italic',



            lf:'leaf', lk:'link',
            l:'list', l2:'list-alt', lc:'lock', li:'log-in', lo:'log-out',

            m:'move',
            mm:'map-marker', mg:'magnet',  mi:'minus', mis:'minus-sign',  mu:'music',



            n:'new-window',


            o:'ok',
            of:'off',
            oc:'ok-circle',
            os:'ok-sign',
            op:'open',

            p:'picture',P:'pause',

            pc:'paperclip',

            pn:'pencil',
            ph:'phone',ph2:'phone-alt',
            pl:'plane',

            pl:'play', pci:'play-circle',
            ps:'plus', pss:'plus-sign',
            pr:'print',

            pp:'pushpin',





            qr:'qrcode', qs:'question-sign',


            rn:'random', rc:'record', rf:'refresh', rgm:'registration-mark',
            rm:'remove', rc:'remove-circle',

            rms:'remove-sign',

            rp:'repeat',

            rsf:'resize-full', rsh:'resize-horizontal', rss:'resize-small', rsv:'resize-vertical',

            rtw:'retweet',
            rd:'road',


            s:'search',


            sv:'save', svd:'saved',

            scs:'screenshot',sdv :'sd-video',



            se:'send',

            sh:'share',sh2:'share-alt',

            sc:'shopping-cart',

            sg:'signal',

            so:'sort',
            sba:'sort-by-alphabet', sba2:'sort-by-alphabet-alt',

            sbat:'sort-by-attributes', sbat2:'sort-by-attributes-alt',

            sbo:'sort-by-order', sbo2:'sort-by-order-alt',

            s5:'sound-5-1',s6:'sound-6-1', s7:'sound-7-1',

            sd:'sound-dolby',ss:'sound-stereo',

            st:'star', ste:'star-empty', sta:'stats',


            stb:'step-backward',
            stf:'step-forward',
            S:'stop', su:'subtitles',



            t:'trash',

            tg:'tag', tgs:'tags',

            ts:'tasks',
            th:'text-height',
            tw:'text-width',

            th:'th',

            tH:'th-large', thl:'th-list',

            thd:'thumbs-down',
            thu:'thumbs-up',

            ti:'time', tn:'tint', tw:'tower',

            tf:'transfer',

            trc:'tree-conifer',
            trd:'tree-deciduous',




            u:'user',uc:'unchecked',ul:'upload',


            v:'volume-up', vd:'volume-down',vo:'volume-off',

            w:'warning-sign', wr:'wrench',

            z:'zoom-in', zo:'zoom-out',


            $:'usd',}
    };bootStrap()
    ooo={
        t:TAG, i:INPUT, s:CSS,a: ATTRIBUTE, o: PROPERTY,
        c:COLOR, k:CLASS, gl:GLYPH,
        os:OLSTYLE,  ow:OLWIDTH,r:ROLE,
        of:OVERFLOW, fl:FLOAT,  u:CURSOR,w:OLWIDTH,p:POSITION, ds:DISPLAY,
        e:EVENT, b: BINDINGS,
        ff:FONTFAMILY,  fs:FONTSTYLE,
        fh:FONTSTRETCH, fw:FONTWIDTH,  fv:FONTVARIANT,
        tt:TEXTTRANSFORM, td:TEXTDECORATION, ta:TEXTALIGNMENT, tb:TEXTBASELINE,
        x:XMET,X:XPOP, z:PATTERN, lj:LINEJOIN, lc:LINECAP,g:GCO,
        j: CREATE,   E:EASE,
        R: {
            C:'c',
            f:'c',
            s:'c',
            dc:'c',
            t:'i', //type->input
            borS:'os' } //border-style->outline-style
        // q: QMET,
    }
    oOo=function oOo(a,b){
        if(_.isUndefined(b)){return _I(lC(V(oO(a))))}
        if(oOo(a)[lC(b)]){return b}}
    Oo=_.defaults(function o(a,b){
        if(D(b)){return o[a] && ( o[a][b] || oOo(a,b))}},ooo)
    oO= _.defaults(function oO(a,b,c){
        return _.isUndefined(a)?  _.keys(f)
            :'*'==b?  $r(a)
            :D(c)  ?    oO(oO(c,a), b)
            :_.isUndefined(b)  ?    D(function(x,y){return oO(a,x,y)},oO[a]||{})
            :(oO[a]&&oO[a][b])?
            oO[a][b]
            :b},ooo)
    oC=function(c){return oO('c',c)}
    oK=function(a){return oO('k',a)}
    oT=function(a){return oO('t',a)}
    oE=function(a){return oO('e',a)}
    oI=function(a){return oO('i',a)}
    oS=function(a){return oO('s',a)} //$o=function o(a,b,c){return _.isUndefined(b)?_p(o,a):G(arguments).N?oO(a,b,c):Oo(a,b,c)}
    oQ=function(f,m){$(function(){Q(m||mf,f)})}
    oO.V =  function(a){return _.values( S(a)? oO(a): a)}




}
//for cssRule
_.$Id=function(str){
    str = str.replace('$', '#')
    str = str.replace('_', '.')
    return str
}
$CSS = function $CSS(rusOb) {
    var g = G(arguments), rus = '\n\n', sty
    if (g.u) {
        return $l($('style').oh())
    }


    _.e(rusOb, function (decs, sel) {
        rus += $CSS.rule(sel, decs, rusOb) + '\n'
    })
    rus += '\n'
    $.hd($CSS.sty(rus))


    return rus
}
$CSS.sel = function (sel) {
    sel = _.$Id(sel)
    if (sel == 'bd') {
        sel = 'body'
    }
    if (sel == 'bt') {
        sel = 'button'
    }
    if (sel == 'sc') {
        sel = 'section'
    }
    if (sel == 'nv') {
        sel = 'nav'
    }
    if (sel == 'd') {
        sel = 'div'
    }
    if (sel == 'i') {
        sel = 'img'
    }
    if (sel == 'ip') {
        sel = 'input'
    }
    return sel
}
$CSS.blk = function (cont) {
    return '{' + cont + '}'
}
$CSS.decBlk = function (decs, rusOb) {
    var decBlk

    //for @media
    if (S(decs)) {
        return decs
    }

    decBlk = ' '

    _.e($CSS.decs(decs, rusOb), function (v, pop) {
        decBlk += $CSS.dec(pop, v)
    })

    return $CSS.blk(decBlk)

}
$CSS.dec = function (pop, v) {
    return pop + ':' + v + '; '
}
$CSS.sty = function (rus) {
    var sty = $El('style');
    sty.type = 'text/css';
    if (rus) {
        sty.innerHTML = rus
    }
    return sty
}
$CSS.decs = function (decs, rusOb) {
    var DECS = {}

    if (decs.ex) {

        if (rusOb && rusOb[decs.ex]) {

            _.x(decs, rusOb[decs.ex])
        }


        else {
            _.x(decs,
                //tries to extend from one of its own first
                //then goes to global ($CSS.ex)
                $CSS.ex[decs.ex])
        }


    }


    if (decs.mx) {
        _.e(decs.mx, function (v, k) {
            $CSS.mx[k].apply(decs, v)
        })
    }

    _.e(decs, function (v, k) {
        if (k !== 'mx' && k !== 'ex') {
            DECS[oO('s', k)] = A(v) ? $CSS.fn[k].apply(null, v) :
                N(v) ? String(v) + 'px' :
                    oO(k, v, 'R')
        }
    })

    return DECS
}
$CSS.rule = function (sel, decs, rusOb) {
    return $CSS.sel(sel) + ' ' + $CSS.decBlk(decs, rusOb)
}
$CSS.rules = function (ob) {
    var g = G(arguments), rus = '', str = '',

        ruls

    g = g.A ? g = g.f : g.u ? {} : g

    ruls = g.S_ ? g : _.m(ob, function (v, k) {
        if (A(v)) {
            v = $CSS.blk($CSS.dec(v[0], v[1]))
        }

        else if (O(v)) {
            v = $CSS.decs(v)
            _.e(v, function (v, k) {
                str += $CSS.dec(k, v)
            });
            v = $CSS.blk(str)
        }


        return $CSS.rule(k, v)
    })

    _.e(ruls, function (ru) {
        rus += ru
    })
    rus = $CSS.blk(rus)
    return rus
}
$CSS.fn = function () {
}
$CSS.mx = function () {
}
$CSS.ex = function () {
}
// this lets you associate a selector with a bunch
// of declarations at once, and you can add more, too
$CSS.ex.icon={
    transition:'background-color ease .2s',
    margin: '0 .5em'
}
//value-helpers
//this lets you write/call functions that
//produce a complicated value to a
//particular property,
// so you don't have to write out
// the full location of the function
// -helps with namespacing
$CSS.fn.B = $CSS.bor= function(c){
    var  col = oO('c', c|| 'z')
    return '8px solid ' + col
}
// these are functions that take pams
// and ctx-bound to the dec obj
// so its main use is to add decs directly on it
// but on function can add multiple decs
$CSS.mx.size=function(w,h){
    this.width = w
    this.height = h || w
}

$.hd=function(){var g=G(arguments),hd
    hd =  $('head')
    if(g.n){return $.hd("link[rel='stylesheet']:last")}
    g.e(function(g){
        if(O(g)){g.p? hd.after(g): hd.A(g)}
        else if(S(g)){return hd.find(g)}})
    return hd
}
$.hdS= function(css){ var lastLink
    lastLink= $.hd().find("link[rel='stylesheet']:last")
    if(lastLink[0]){
        lastLink.after($(css))}
    else {
        $.hd().A($(css))}
    return $
}
$.fn.fCt=function(str){
    alert('fCt')
    return  this.fi(":contains("+ str +")")
}
$.mar=function(){
    var g=G(arguments),o
    o= N(g[3])? g.f+'px ' + g.s + 'px '+ g.t + 'px ' + g[3]+'px':
        N(g.t)? g.f+'px ' + g.s + 'px '+ g.t + 'px ' + g.f+'px':
            N(g.s)? g.f+'px ' + g.s + 'px '+ g.s + 'px ' + g.f+'px':
                N(g.f)?g.f+'px '+g.f+'px '+g.f+'px '+g.f+'px':
                    '10px 10px 10px 10px'
    return o
}
$.Fo=$.font =$f= function(a,b){var g=G(arguments)

    if(O(a)){

        return ss(
            oB(b), { fz : a||50 }
        )
    }


    a=N(a)?_S(a):U(a)?'':a;


    var  F='fantasy',W='normal',S='normal',Z=px(100);

    _.e(a.split(' '),function(p){
        if(M(p[0])){p=p.split('/')
            Z=  p[0]+'px'+    p[1]?'/'+p[1]+'px' : ''}

        F=Oo('ff',p)||F
        W=Oo('fw',p)||W
        S=Oo('fs',p)||S

    })

    return [W,S,Z,F].join(' ')
}
$.Ol=$.outline = function OL(){
    var g=G(arguments), o,ol
    o= g.N_? {w: g.f}:
        Oo('c',o)?    {c: g.f, w: g.s, s: g.t}: { w: g.f, s: g.s}


    /*
     if(S(g.f)){
     o= g.f.split(' ')
     ol= _.j([
     $r('c',o[0]),  oO('ow',o[1]||5) +'px',
     oO('os',o[2]||'-') ])
     $l(ol)
     return ol}
     ol=  _.j([
     $r('c',o.c),
     N(o.w)? o.w+'px'$r('ow',o.w),
     $r('os',o.s)
     ])*/


    $l( ol )
    return ol
}
$.delBt=function(url, data){var bt

    bt = $.bt('delete', function( el ){

        $.ajax({type: 'DELETE',
            data: data,
            url: url,
            success: function (){
                $(el.target).closest('div').rm() }})
    })


    return bt
}
$.fn.selPic=function() {
    $('.pic').e(function () {
        $(this).C('b')
    })
    this.parent().C('y')
}
$.fn.oh = function () {
    return this[0].outerHTML
}
$.fn.oH=$.fn.outerHeight
$.fn.oh=function(){
    return this[0].outerHTML
}
$.fn.ch = function () {
    return this.children()
}
$.fn.pa = $.fn.parent
$.fn.fi = $.fn.find
$.fn.sib = function () {
    var g = G(arguments);
    return this.sib.apply(this.g)
}
$.fn.hd= $.fn.hide
$.fn.sh= $.fn.show
$.fn.ap2=function(el){
    el.A(this)
    return this
}
$.fn.A=function(stuff){
    if( U(stuff)){$('body').append(this); return this}
    this.append.apply(this, arguments)
    return this}
$.fn.rm=$.fn.xx=function(){var e=this
    e.remove()
    return e
}
$.fn.rm=function(){return this.remove()}
$.fn.rm=function(){return this.remove()}
$.fn.iA=$.fn.insertAfter
$.fn.A=function(stuff){
    if( U(stuff)){$('body').append(this); return this}
    this.append.apply(this, arguments)
    return this}
$.fn.pp2=function(a){this.prependTo(a); return this}
$.fn.a2=function(a){a.A(this); return this}
$.fn.pp= $.fn.prepend
$.fn.E=function(html){
    this.empty(); this.html(html); return this
}
$.fn.E=function(html){
    this.empty(); this.html(html); return this
}
$.fn.e = $.fn.each
$.fn.N= $.fn.next
$.fn.gg = $.fn.toggle
$.fn.h= $.fn.ht=$.fn.html
$.fn.K= function(){  $.fn.addClass.apply(this, arguments); return this  }
$.fn.K= function(){
    $.fn.addClass.apply(this, arguments); return this
}
$.fn.xK= $.fn.removeClass
$.fn.pp=function(a){ this.pp(a); return this}
$.fn.chk=function(){ this.at('checked', true) }
$.fn.fr=$.fn.for=function(forWhat){return this.attr('for', forWhat)}
$.fn.at= $.fn.attr
$.fn.ph= function(forWhat){return this.attr('placeholder', forWhat)}
$.fn.type=function(type){
    if(U(type)){return this.attr('type')}
    this.attr('type',type);return this
}
$.fn.ty= $.fn.type=function(type){
    if(U(type)){return this.attr('type')}
    this.attr('type',type);return this
}
$.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
$.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
$.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
$.fn.n= $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
$.fn.hf=$.fn.href=function(href){
    if(U(href)){return this.attr('href')}
    this.attr('href',href); return this
}
$.fn.href=function(href){
    if(U(href)){return this.attr('href')}
    this.attr('href',href);return this
}
$.fn.for = function (forWhat) {
    return this.attr('for', forWhat)
}
$.fn.placeholder = function (forWhat) {
    return this.attr('placeholder', forWhat)
}
$.fn.src = function (a) {


    if (U(a)) {
        return this.attr('src')
    }

    this.attr('src', $src(a))

    return this
}
$.fn.role = function (role) {
    if (U(role)) {
        return this.attr('role')
    }
    this.attr('role', role)
    return this

}
$.fn.src= function(a){
    if( U(a) ){return this.attr('src')}

    this.attr('src', $src(a) )

    return this
}
$.fn.role=function(role){
    if(U(role)){return this.attr('role')}
    this.attr('role', role)
    return this

}
$.fn.v = function(v){var g=G(arguments),v

    if(D(v)){
        this.val(v)

        return this
    }
    v=this.val()
    if(!g.p){this.val('')}
    return v

}
$.fn.Vx=function(){
    var val= this.val()
    this.val('')
    return val
}
$.fn.V=function(){
    var v=this.val()
    this.val('')
    return v
}
$.fn.T= function(){var g=G(arguments)
    this.text.apply(this,g)
    return this
}

$.$ = function (f) {
    return $(document).on('click', _v(f))

    /*
     $.$=function(){
     var b=$('html')
     b.click.apply(b, arguments)
     return $
     }*/
}
$.$$ = function (f) {
    return $(document).on('dblclick', _v(f))
//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
}
$.md = $.mousedown = function (fn) {
    $('body').on('mousedown', fn);
    return this
}
$.mu = $.mouseup = function (fn) {
    $('body').on('mouseup', fn);
    return this
}
$.mm = $.mousemove = function (fn) {
    $('body').on('mousemove', fn);
    return this
}
$.oMD = function (fn) {
    $.md(function (e) {
        fn(e.clientX, e.clientY, e)
    })
    return $
}
$.oMU = function (fn) {
    $.mu(function (e) {
        fn(e.clientX, e.clientY, e)
    });
    return $
}
$.oMM = function (fn) {
    $.mm(function (e) {
        fn(e.clientX, e.clientY, e)
    });
    return $
}
$.fn.m = function (o) {
    var e = this
    if (o.mD) {
        e.mD(o.mD)
    }
    if (o.mU) {
        e.mD(o.mU)
    }
    if (o.pM) {
        e.pM(o.pM)
    }
    return e
}
$.fn.$ = $.fn.click
$.fn.hv = $.fn.hover
$.fn.mD = function (l) {
    var c = this
    c.mousedown(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.mD = function (l) {
    var c = this
    c.mousedown(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.pM = function (l) {
    var c = this
    c.pressmove(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.pm = $.fn.pressmove = function (func) {
    var mouse_pressed
    this.mousedown(function () {
        mouse_pressed = true
    })
    this.mouseup(function () {
        mouse_pressed = false
    })


    this.mousemove(function (e) {


        if (mouse_pressed) {

            func(e)

        }

    })


    return this
}
$.fn.mp = $.fn.mousePoint = function (e, scale) {
    scale = N(scale) ? scale : 1
    return V(e.pageX / scale, e.pageY / scale)
}
$.fn.mU = function (l) {
    $l('mU')
    var c = this
    c.mouseup(function (e) {
        l(e.clientX, e.clientY)
    })
    return c
}
$.fn.pM = function (l) {
    var c = this
    c.pressmove(function (e) {
        l(e.clientX, e.clientY)
    })
    return c

}
$.fn.m = function (o) {
    $l('.m')
    var e = this
    if (o.mD) {
        e.mD(o.mD)
    }
    if (o.mU) {
        e.mD(o.mU)
    }
    if (o.pM) {
        e.pM(o.pM)
    }
    return e
}

KEYOB = keyObj = {

    up: 38, u: 38,
    down: 40, d: 40,
    left: 37, l: 37,
    right: 39, r: 39,
    space: 32, s: 32,
    enter: 13, e: 13
}
$.wh = function (a, b) {
    return D(b) ? a.which == b : a.which
}
$.k = $.key = $.kD = function self(k, fn) {

    if (O(k)) {
        _.e(k, function (fn, k) {
            if (s$(k).isUpper()) {
                $.kU(k.toLowerCase(), fn)
            }
            else {
                $.k(k, fn)
            }
        })
        return
    }

    if (KEYOB[k]) {
        k = KEYOB[k]
    }

    $('body').on('keydown', function (e) {
        if (e.which == k) {
            fn(e, $.K)
        }
    })

}
$.kU = function (k, fn) {

    if (keyObj[k]) {
        k = keyObj[k]
    }
    $('body').on('keyup', function (e) {
        if (e.which == k) {
            fn(e, $.K)
        }
    })
}
$.spc = function (fn) {
    return $.kD('space', fn)
}
K = function (k, fn) {
    var g = G(arguments), o, key
    if (g.u) {
        if (K._loaded) {
            return
        }
        $.kD('l', function () {
            if ($.test) {
                $l('left pressed')
            }
            K.l = cjs.Keys.l = cjs.Keys.left = true
            cjs.Keys.dir = 'left'
            K.l = 1;
            K.L = 0
        })
        $.kU('l', function () {
            if ($.test) {
                $l('left lifted')
            }
            K.l = cjs.Keys.l = cjs.Keys.left = false
            K.l = 0;
            K.L = 1
        })
        $.kD('r', function () {
            if ($.test) {
                $l('right pressed')
            }
            K.r = cjs.Keys.r = cjs.Keys.right = true
            cjs.Keys.dir = 'right'
            K.r = 1;
            K.R = 0
        })
        $.kU('r', function () {
            if ($.test) {
                $l('right lifted')
            }
            cjs.Keys.r = cjs.Keys.right = false
            K.r = 0;
            K.R = 1
        })
        $.kD('u', function () {
            if ($.test) {
                $l('up pressed')
            }
            cjs.Keys.u = cjs.Keys.up = true
            K.u = 1;
            K.U = 0
        })
        $.kU('u', function () {
            if ($.test) {
                $l('up lifted')
            }
            cjs.Keys.u = cjs.Keys.up = false
            K.u = 0;
            K.U = 1
        })
        $.kD('d', function () {
            if ($.test) {
                $l('down pressed')
            }
            cjs.Keys.d = cjs.Keys.down = true
            K.d = 1;
            K.D = 0
        })
        $.kU('d', function () {
            if ($.test) {
                $l('down lifted')
            }
            cjs.Keys.d = cjs.Keys.down = false
            K.d = 0;
            K.D = 1
        })
        K._loaded = 1
        return
    }

    if (O(k)) {
        if (g.p) {
            if (F(k.u)) {
                z(function () {
                    if (K.u) {
                        k.u(K.u)
                    }
                })
            }
            if (F(k.d)) {
                z(function () {
                    if (K.d) {
                        k.d(K.d)
                    }
                })
            }
            if (F(k.l)) {
                z(function () {
                    if (K.l) {
                        k.l(K.l)
                    }
                })
            }
            if (F(k.r)) {
                z(function () {
                    if (K.r) {
                        k.r(K.r)
                    }
                })
            }
        }
        else {
            _.e(k, function (fn, k) {
                K(k, fn)
            })
        }
        return
    }
    o = s$(k).isUpper() ? {on: 'keyup', k: k.toLowerCase()} : {on: 'keydown', k: k}
    if (g.p) {
        return z(function () {
            if (K[k]) {
                fn()
            }
        })
    }
    key = Key(o.k)
    return $('body').on(o.on, function (e) {
        if (e.which == key) {
            fn(e)
        }
    })
    function Key(k) {
        var ob = {u: 38, d: 40, l: 37, r: 39, s: 32, e: 13};
        return ob[k] ? ob[k] : k
    }
}
$.space = function (fn) {
    return $.kD('space', fn)
}
$.fn.dg = function () {
    return this.drag()
}
$.fn.dg = function () {
    return this.drag()
}
$.fn.dg = $.fn.drag = function () {

    this.A()
    this.each(function () {
        $(this).css('top', $(this).position().top)
        $(this).css('left', $(this).position().left)
    })

    this.P('a')

    this.on('mousedown', function (e) {

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX - offset.left,
            deltaY = e.pageY - offset.top

        $('html').on('mousemove', function (e) {
            var x = e.pageX - deltaX,
                y = e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on('mouseup', function () {
            $(this).off()
        })

    })

    //touchDrg(element)
    return this

}
$.fn.dg = $.fn.drag = function () {

    this.A()
    this.each(function () {
        $(this).css('top', $(this).position().top)
        $(this).css('left', $(this).position().left)
    })

    this.P('a')

    this.on('mousedown', function (e) {

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX - offset.left,
            deltaY = e.pageY - offset.top

        $('html').on('mousemove', function (e) {
            var x = e.pageX - deltaX,
                y = e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on('mouseup', function () {
            $(this).off()
        })

    })

    //touchDrg(element)
    return this

}
$.fn.drag = function () {

    this.A()
    this.each(function () {
        $(this).css('top', $(this).position().top)
        $(this).css('left', $(this).position().left)
    })

    this.P('a')

    this.on('mousedown', function (e) {

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX - offset.left,
            deltaY = e.pageY - offset.top

        $('html').on('mousemove', function (e) {
            var x = e.pageX - deltaX,
                y = e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on('mouseup', function () {
            $(this).off()
        })

    })

    //touchDrg(element)
    return this

}
$.fn.drag = function () {

    this.A()
    this.each(function () {
        $(this).css('top', $(this).position().top)
        $(this).css('left', $(this).position().left)
    })

    this.P('a')

    this.on('mousedown', function (e) {

        var el = $(this)

        var offset = el.offset(),
            deltaX = e.pageX - offset.left,
            deltaY = e.pageY - offset.top

        $('html').on('mousemove', function (e) {
            var x = e.pageX - deltaX,
                y = e.pageY - deltaY

            el.left(x)
            el.top(y)

        }).on('mouseup', function () {
            $(this).off()
        })

    })

    //touchDrg(element)
    return this

}

$.XML = function () {
    return new XMLHttpRequest()
}
$.aj = function (ob) {
    return $.ajax(ob)
}
$.txG = function (url) {
    $.get('/' + url, function (aa) {
        a = aa
    })
}
$.G = $.g = function () {
    var g = G(arguments), o;
    if (U(g[1])) {
        return _.p($.G, g[0])
    }
    o = F(g[1]) ? {p: g[0], fn: g[1]} :
    {p: g[0], d: g[1], fn: g[2]};
    $.get(S.eL(o.p), o.d || {},
        function (d) {
            o.fn = o.fn || function () {
                return 'boo ya!'
            };
            o.fn(d)
        })
}
$.eG = function () {
    var g = G(arguments), o;

    if (U(g[1])) {
        return _.p($.eG, g[0])
    }
    o = F(g[1]) ? {p: g[0], fn: g[1]} :
    {p: g[0], d: g[1], fn: g[2]};

    $.G(o.p, o.d || {},
        function (dd) {
            _.e(dd, function (d) {
                o.fn(d)
            })
        });
    return $
}
$.Gj = function () {
    var g = G(arguments), o;
    if (U(g[1])) {
        return _.p($.Gj, g[0])
    }
    o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
    o.fn = o.fn || function () {
        return 'boo ya!'
    };
    $.getJSON(
        S.eL(o.p),
        o.d || {},
        function (d) {
            o.fn(d)
        });
    return $
}
$.eJ = $.eGj = function () {
    var g = G(arguments), o;
    if (U(g[1])) {
        return _.p($.eJ, g[0])
    }
    o = F(g[1]) ?
    {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
    $.Gj(o.p, o.d || {}, function (dd) {
        _.e(dd, function (d) {
            o.fn(d)
        })
    });
    return $
}
$.P = $.po = function () {
    var g = G(arguments), o;
    o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
    o.d = U(o.d) ? {} : O(o.d) ? o.d : {data: o.d};
    o.fn = o.fn || function () {
        return 'boo ya!'
    };
    $.post(S.eL(o.p), o.d, function (d) {
        o.fn(o.d, o)
    });
    return $
}
$.eP = function () {
    var g = G(arguments);
    if (U(g[1])) {
        return _.p($.eP, g[0])
    }
    o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
    $.P(o.u, o.d || {}, function (dd) {
        _.e(dd, function (d) {
            o.fn(d)
        })
    });
    return $
}


$.fn.ab = $.fn.abs = function (x, y) {
    this.P('a', x, y)
    return this
}
$.fn.mlt=function(m){
    return this.at('multiple', true)
}
rel();addRm();disp(); valu(); color(); klass(); outer(); style(); atts(); background(); text()
function rel() {
    $.fn.ch = function () {
        return this.children()
    }
    $.fn.pa = $.fn.parent
    $.fn.fi = $.fn.find
    $.fn.sib = function () {
        var g = G(arguments);
        return this.sib.apply(this.g)
    }
}
function text(){

    $.fn.T= function(){var g=G(arguments)
        this.text.apply(this,g)
        return this
    }
    $.fn.fS= function(z){ this.css('font-size', z)

        return this}
    $.fn.tA=  function(z){
        this.css('text-align', z)
        return this}

}
function addRm(){
    $.fn.ap2=function(el){
        el.A(this)
        return this
    }
    $.fn.A=function(stuff){
        if( U(stuff)){$('body').append(this); return this}
        this.append.apply(this, arguments)
        return this}
    $.fn.rm=$.fn.xx=function(){var e=this
        e.remove()
        return e
    }
    $.fn.rm=function(){return this.remove()}

    $.fn.rm=function(){return this.remove()}
    $.fn.iA=$.fn.insertAfter

    $.fn.A=function(stuff){
        if( U(stuff)){$('body').append(this); return this}
        this.append.apply(this, arguments)
        return this}
    $.fn.pp2=function(a){this.prependTo(a); return this}
    $.fn.a2=function(a){a.A(this); return this}
    $.fn.pp= $.fn.prepend

    $.fn.E=function(html){
        this.empty(); this.html(html); return this
    }
    $.fn.E=function(html){
        this.empty(); this.html(html); return this
    }

}
function color(){
    $.fn.al=function(al){return this.opacity(al)}

    $.fn.col = function(col){
        return this.css('color', oO('c', col))}
    $.fn.C = function(c, c2){
        if(c2){return this.C(c).col(c2)}
        if(c=='*'){
            c = Yano.random()
           // $l(c)
        }
        return this.css('backgroundColor', oO('c', c))
    }

    $.fn.col = function(col){
        return this.css('color', oO('c', col))}
    $.fn.C = function(col, c2){
        if(c2){return this.C(col).col(c2)}

        if(col=='*'){
            //$l(col)

            col = Yano.random() }

        return this.css('backgroundColor', oO('c', col))
    }
    $.fn.al= $.fn.opacity=$.fn.alpha=function(z){

        this.css('opacity', z)

        return this}
}
function klass(){
    $.fn.K= function(){
        $.fn.addClass.apply(this, arguments); return this
    }
    $.fn.xK= $.fn.removeClass
}
function valu(){
    $.fn.v = function(v){var g=G(arguments),v

        if(D(v)){
            this.val(v)

            return this
        }
        v=this.val()
        if(!g.p){this.val('')}
        return v

    }
    $.fn.Vx=function(){
        var val= this.val()
        this.val('')
        return val
    }
    $.fn.V=function(){
        var v=this.val()
        this.val('')
        return v
    }
}
function outer(){
    $.fn.e = $.fn.each
    $.fn.N= $.fn.next
    $.fn.tt=$.fn.tit= $.fn.title=function(t,c){var p
        p = $.p(t).fS(24).K('text-center').C('X', c||'z').mH(10).pH(30)
        this.A(p, $.hr().fS(10))
        return this
    }
    $.fn.gg = $.fn.toggle


    $.fn.h= $.fn.ht=$.fn.html

    $.fn.oh = function () {
        return this[0].outerHTML
    }
    $.fn.oH=$.fn.outerHeight
    $.fn.oh=function(){
        return this[0].outerHTML
    }


}
function disp() {

    $.fn.dp= $.fn.display=function(display){
        if(U(display)){return this.css('display')}
        this.css('display',display);return this
    }
    $.fn.float=function(float){
        if(U(float)){return this.css('float')}
        this.css('float',float);return this
    }
    $.fn.P1 = function (pos, x, y) {
        if (U(pos)) {
            return this.css('position')
        }
        this.css('position', oO('p', pos))

        if (N(x)) {
            this.X(x)
        }
        if (y) {
            this.Y(y)
        }
        return this
    }
    $.fn.P = function (pos, x, y) {
        var e = this, g = G(arguments)
        if (g.u) {
            return e.css('position')
        }
        e.css('position', oO('p', pos))
        if (N(g.s)) {
            e.X(g.s)
        }
        if (g.t) {
            e.Y(g.t)
        }
        return e
    }
    $.fn.ab = $.fn.abs = function (x, y) {
        var e = this

        return e.P('a', x, y)

    }
}
function style(){

    $.fn.ov = $.fn.overflow=function(overflow){
        if(U(overflow)){return this.css('overflow')}
        this.css('overflow',overflow);return this
    }
    $.fn.hd= $.fn.hide
    $.fn.sh= $.fn.show
    $.fn.s= $.fn.css
    $.fn.K= function(){  $.fn.addClass.apply(this, arguments); return this  }
    $.fn.fontSize=function(z){ this.css('font-size', z)

        return this}
    $.fn.textAlign=function(z){

        this.css('text-align', z)

        return this}

    $.fn.opacity=$.fn.alpha=function(z){

        this.css('opacity', z)

        return this}

    $.fn.display=function(display){
        if(U(display)){return this.css('display')}
        this.css('display',display);return this
    }

    $.fn.float=function(float){
        if(U(float)){return this.css('float')}
        this.css('float',float);return this
    }
    $.fn.overflow=function(overflow){
        if(U(overflow)){return this.css('overflow')}
        this.css('overflow',overflow);return this
    }

    $.fn.zIndex=function(z){
        if(U(z)){return this.css('z-index')}
        this.css('z-index',z);return this}
}
function atts() {
    $.fn.pp=function(a){ this.pp(a); return this}


    $.fn.chk=function(){ this.at('checked', true) }

    $.fn.fr=$.fn.for=function(forWhat){return this.attr('for', forWhat)}

    $.fn.at= $.fn.attr
    $.fn.ph= function(forWhat){return this.attr('placeholder', forWhat)}


    $.fn.type=function(type){
        if(U(type)){return this.attr('type')}
        this.attr('type',type);return this
    }
    $.fn.ty= $.fn.type=function(type){
        if(U(type)){return this.attr('type')}
        this.attr('type',type);return this
    }

    $.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
    $.fn.id=function(id){ if(U(id)){ return this.attr('id')}; this.attr('id', id);return this     }
    $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }
    $.fn.n= $.fn.name=function(name){ if(U(name)){ return this.attr('name')}; this.attr('name', name);return this     }

    $.fn.hf=$.fn.href=function(href){
        if(U(href)){return this.attr('href')}
        this.attr('href',href); return this
    }
    $.fn.href=function(href){
        if(U(href)){return this.attr('href')}
        this.attr('href',href);return this
    }


    $.fn.for = function (forWhat) {
        return this.attr('for', forWhat)
    }
    $.fn.placeholder = function (forWhat) {
        return this.attr('placeholder', forWhat)
    }
    $.fn.src = function (a) {


        if (U(a)) {
            return this.attr('src')
        }

        this.attr('src', $src(a))

        return this
    }
    $.fn.role = function (role) {
        if (U(role)) {
            return this.attr('role')
        }
        this.attr('role', role)
        return this

    }

    $.fn.src= function(a){
        if( U(a) ){return this.attr('src')}

        this.attr('src', $src(a) )

        return this
    }

    $.fn.role=function(role){
        if(U(role)){return this.attr('role')}
        this.attr('role', role)
        return this

    }

}
function background(){



    $.fn.background = function (bg) {
        if (U(bg)) {
            return this.css('background')
        }
        this.css('background', bg)
        return this
    }
    $.fn.backgroundPosition = function (bg) {
        if (U(bg)) {
            return this.css('backgroundPosition')
        }
        this.css('backgroundPosition', bg)
        return this
    }
    $.fn.bg=function(bg){
        if(U(bg)){return this.css('background')}
        this.css('background', bg)
        return this
    }
    $.fn.bgP=function(bg){
        if(U(bg)){return this.css('backgroundPosition')}
        this.css('backgroundPosition', bg)
        return this
    }
    $.fn.bg = $.fn.bgI = function (url) {//set background image
        this.bgI('url("' + Y.src(url) + '")');
        return this
    }
    $.fn.bp = $.positionBackgroundImage = function (x, y) {
        var g = G(arguments), x = g[0], y = g[1];
        x = N(x) ? x : 0;
        y = N(y) ? y : 0;
        this.css({backgroundPos: x + 'px ' + y + 'px'});
        return this

    }

}
$.fn.p = $.fn.P = function (pos, x, y) {
    if (U(pos)) {
        return this.css('position')
    }
    this.css('position', oO('p', pos))
    if (N(x)) {
        this.X(x)
    }
    if (y) {
        this.Y(y)
    }
    return this
}
$.fn.os = function () {
    return this.offset()
}
$.fn.sz=function(sz){
    return this.at('size', sz)
}
$.fn.zi=$.fn.zIndex=function(z){
    if(U(z)){return this.css('z-index')}
    this.css('z-index',z);return this}
$.fn.getPosition = $.fn.getTotalOffset = function () {

    var e = this, x = 0, y = 0

    while (E(e) && e.tagName) {

        y += e.offsetTop

        x += e.offsetLeft

        if (isBodyElement(e)) {
            e = 0
        }

        e = e.offsetParent || e
    }

    return {x: x, y: y}


}//just gets the TOTAL offset of ANY element
$.fn.osP=function(){return this.offsetParent} // not a fn?
bor(); pad(); mar()
function mar(){
    $.fn.mar = function (margin) {

        if (U(margin)) {
            return this.css('margin')
        }

        this.css('margin', margin);
        return this
    }
    $.fn.marBottom = function (margin) {

        if (U(margin)) {
            return this.css('marginBottom')
        }

        this.css('marginBottom', margin);
        return this
    }
    $.fn.marTop = function (margin) {

        if (U(margin)) {
            return this.css('marginTop')
        }

        this.css('marginTop', margin);
        return this
    }
    $.fn.marLeft = function (margin) {

        if (U(margin)) {
            return this.css('marginLeft')
        }

        this.css('marginLeft', margin);
        return this
    }
    $.fn.marRight = function (margin) {

        if (U(margin)) {
            return this.css('marginRight')
        }

        this.css('marginRight', margin);
        return this
    }
    $.fn.marHor = function (a) {
        return this.marLeft(a).marRight(a)
    }
    $.fn.marVer = function (a) {
        return this.marTop(a).marBottom(a)
    }
    $.fn.mar = function (margin) {

        if (U(margin)) {
            return this.css('margin')
        }

        this.css('margin', margin);
        return this
    }
    $.fn.mB = $.fn.marBottom = function (margin) {

        if (U(margin)) {
            return this.css('marginBottom')
        }

        this.css('marginBottom', margin);
        return this
    }
    $.fn.mT = $.fn.marTop = function (margin) {

        if (U(margin)) {
            return this.css('marginTop')
        }

        this.css('marginTop', margin);
        return this
    }
    $.fn.mL = $.fn.marLeft = function (margin) {

        if (U(margin)) {
            return this.css('marginLeft')
        }

        this.css('marginLeft', margin);
        return this
    }
    $.fn.mR = $.fn.marRight = function (margin) {

        if (U(margin)) {
            return this.css('marginRight')
        }

        this.css('marginRight', margin);
        return this
    }
    $.fn.mH = $.fn.marHor = function (a) {
        return this.marLeft(a).marRight(a)
    }
    $.fn.mV = $.fn.marVer = function (a) {
        return this.marTop(a).marBottom(a)
    }


}
function pad(){

    $.fn.pad=function(padding){
        if(U(padding)){return this.css('padding')}
        this.css('padding',padding);return this}
    $.fn.padTop=function(padding){
        if(U(padding)){return this.css('paddingTop')}
        this.css('paddingTop',padding);return this}
    $.fn.padBottom=function(padding){
        if(U(padding)){return this.css('paddingBottom')}
        this.css('paddingBottom',padding);return this}
    $.fn.padLeft=function(padding){
        if(U(padding)){return this.css('paddingLeft')}
        this.css('paddingLeft',padding);return this}
    $.fn.padRight=function(padding){
        if(U(padding)){return this.css('paddingRight')}
        this.css('paddingRight',padding);return this}
    $.fn.padHor=function(a){return this.padLeft(a).padRight(a)}
    $.fn.padVer=function(a){return this.padTop(a).padBottom(a)}

    $.fn.pad = function (padding) {
        if (U(padding)) {
            return this.css('padding')
        }
        this.css('padding', padding);
        return this
    }
    $.fn.pT = $.fn.padTop = function (padding) {
        if (U(padding)) {
            return this.css('paddingTop')
        }
        this.css('paddingTop', padding);
        return this
    }
    $.fn.pB = $.fn.padBottom = function (padding) {
        if (U(padding)) {
            return this.css('paddingBottom')
        }
        this.css('paddingBottom', padding);
        return this
    }
    $.fn.pL = $.fn.padLeft = function (padding) {
        if (U(padding)) {
            return this.css('paddingLeft')
        }
        this.css('paddingLeft', padding);
        return this
    }
    $.fn.pR = $.fn.padRight = function (padding) {
        if (U(padding)) {
            return this.css('paddingRight')
        }
        this.css('paddingRight', padding);
        return this
    }
    $.fn.pH = $.fn.padHor = function (a) {
        return this.padLeft(a).padRight(a)
    }
    $.fn.pV = $.fn.padVer = function (a) {
        return this.padTop(a).padBottom(a)
    }


}
function bor(){
    $.fn.borderStyle= function(style){

        this.css('border-style', style)

        return this}
    $.fn.borderColor=function(c){

        this.css('border-color', oO('c', c))

        return this}
    $.fn.borderWidth=function(w){

        this.css('border-width',w)

        return this}
    $.fn.bor=function(border){
        if(U(border)){return this.css('border')}
        this.css('border',border);return this}
    $.fn.bS = $.fn.borderStyle = function (style) {

        this.css('border-style', style)

        return this
    }
    $.fn.bdC = $.fn.borderColor = function (c) {

        this.css('border-color', oO('c', c))

        return this
    }
    $.fn.bW = $.fn.borderWidth = function (w) {

        this.css('border-width', w)

        return this
    }
    $.fn.bor = function (border) {
        if (U(border)) {
            return this.css('border')
        }
        this.css('border', border);
        return this
    }



}
$.fn.ab = $.fn.abs = function (x, y) {
    var e = this

    return e.P('a', x, y)

}
$.fn.P = function (pos, x, y) {
    var e = this, g = G(arguments)
    if (g.u) {
        return e.css('position')
    }
    e.css('position', oO('p', pos))
    if (N(g.s)) {
        e.X(g.s)
    }
    if (g.t) {
        e.Y(g.t)
    }
    return e
}
$.fn.W=function(w){return w? this.width(w):this.width()}
$.fn.H=function(h){return h? this.height(h): this.height()}
$.fn.WH = function (w, h) {h = h || w; return this.W(w).H(h)}
//$.fn.Z = function (w, h) {return this.W(w).H(h || w)}
$.fn.MW = $.fn.maxW = function (a) {
    return this.css('max-width', a)
}
$.fn.mW = $.fn.minW = function (a) {
    return this.css('min-width', a)
}
$.fn.mH = $.fn.minH = function (a) {
    return this.css('min-height', a)
}
$.fn.maxH = function (a) {
    return this.css('max-height', a)
}
$.fn.X = function (l) {
    var q = this, g = G(arguments)
    if (N(l)) {

        q.css('left',

            g.p ? q.X() + l :
                l
        )

        return q
    }
    l = q.css('left')
    return l == 'auto' ? 'auto' : parseInt(l)

    /*
     $.fn.X = $.fn.left = function (left) {
     if (N(left)) {
     return this.css('left', left)
     }
     var left = this.css('left')
     if (left == 'auto') {
     return 'auto'
     }
     return parseInt(left)
     }
     */

}
$.fn.l = $.fn.left=function (l) {var q = this, g = G(arguments)
    if (N(l)) {
        q.css('left', l)
        return q}
    l = q.css('left')
    return l == 'auto' ? 'auto' : q.position().left
}
$.fn.L = function (n) {
    if (U(n)) {return this.css('left')}
    this.css('left', n)
    return this
}
$.fn.rit= $.fn.R = function (right) {
    if (U(right)) {
        return this.css('right')
    }
    this.css('right', right)
    return this
}
$.fn.LR = function (l, r) {
    var q = this
    if (O(l)) {
        r = l.r;
        l = l.l
    }
    if (N(l)) {
        q.L(l)
    }
    if (N(r)) {
        q.R(r)
    }
    return q
}
$.fn.Y = $.fn.top= function (top) {

    if (N(top)) {
        return this.css('top', top)
    }
    var top = this.css('top')
    if (top == 'auto') {
        return 'auto'
    }
    return parseInt(top)

    /*
     $.fn.Y = $.fn.top = function (top) {
     if (N(top)) {
     return this.css('top', top)
     }
     var top = this.css('top')
     if (top == 'auto') {
     return 'auto'
     }
     return parseInt(top)
     }
     */
} //$.fn.t
$.fn.bot=$.fn.B =   function (bottom) {
    if (U(bottom)) {
        return this.css('bottom')
    }

    this.css('bottom', bottom)
    return this
}
$.fn.XY = function (x, y) {

    x = N(x) ? x : 0

    if (U(y)) {
        y = x
    }
    return this.X(x).Y(y)

    /*
     $.fn.XY = function (x, y) {
     x = N(x) ? x : 0
     if (U(y)) {
     y = x
     }
     return this.X(x).Y(y)
     }
     */
}
$El=function(tag){
    if(tag){return document.createElement(tag)}

}

oOo = function oOo(a, b) {
    if (_.isUndefined(b)) {
        return _I(lC(V(oO(a))))
    }
    if (oOo(a)[lC(b)]) {
        return b
    }
}
Oo = _.defaults(function o(a, b) {
    if (D(b)) {
        return o[a] && ( o[a][b] || oOo(a, b))
    }
}, ooo)
oO = _.defaults(function oO(a, b, c) {
    return _.isUndefined(a) ? _.keys(f)
        : '*' == b ? $r(a)
        : D(c) ? oO(oO(c, a), b)
        : _.isUndefined(b) ? D(function (x, y) {
        return oO(a, x, y)
    }, oO[a] || {})
        : (oO[a] && oO[a][b]) ?
        oO[a][b]
        : b
}, ooo)
C = function (a) {

    if (_.isObject(a = E(a) || a)) {
        return a.canvas ? a.canvas :

            s$(a.toString()).contains('Canvas')

                ? Q(a)[0] : 0
    }
}
E = function E(a, b, c) {
    if (S(b)) {
        return s$(a).endsWith(b)
    }
    if (F(b)) {
        return _.every(a, b, c)
    }
    if (O(a)) {

        a = O(a.e) ? a.e
            : O(a.c) ? a.c
            : a

        a = $(a)[0]

        if (_.isElement(a)) {
            return a
        }

    }
}
$.extension = _x = function (a, b) {
    //if(_.isString(a)){
    return s$(a).contains('.') ? a : s$(a).ensureRight(b || '.png').s
    //}
}
z = function (fn) {
    var g = G(arguments)
    if (g.F_) {
        return T.t(fn)
    }
    $('body').empty()
}
//$w=window; $$w=$(window)
R=function(n,n2){var num
    n=N(n)?n:1
    n2=N(n2)?n2:0
    return M.round((M.random()*n)+n2)
}
$.tap=function(func){this('body').on('keydown mousedown', func); return this}
_z=function z(a,b,c){return U(b)?_.size(a)
    :N(b)?_z(a)==b
    :_z(a)==_z(b)}
$.update=function(curr, update, g){var res
    if(g.p){res = curr + update}
    else if(g.n){res = curr - update}
    else if(g.m){res = curr * update}
    else if(g.d){res = curr / update}
    else res = update
    return res
}
$.fn.a2=function(el){el.A(this); return this}
$.rulers = function () {
    $.d('b', 100, 100).al(.3).dg()
    $.d('r', 100, 300).al(.3).dg()
}
$.toColor = function(n1,n2,n3,n4){return n2? "rgba("+n1+","+n2+","+""+n3+","+(n4||1)+")" : $r('c', n1)}

_.inx = function(){}
_.eR=function(g,fn){_.e(_.r(g),fn)}
_.fW=_.findWhere
_.wh=_.where
_.rj=_.reject
_.evx=function(a){return a}
$.scroll = function (a) {
    return $(window).scroll(a || function () {
        $('body').C('*')
    })
}
$.click = m$ = function (f) {
    return $(document).on('click', _v(f))
}
$.dblclick = m$$ = function (f) {
    return $(document).on('dblclick', _v(f))
}

$.fn.xPrp=function(){
    this.on('mousedown', function(e){  e.stopPropagation()  })
    return this}
$.dg = $.dragFrame = function (d) {
    var oD
    oD = $.d('y').pad(20).drag()
    d = d || $.d('r').mar(20)
    d.xPrp().a2(oD)
    d.oD = oD
    oD.XY(40, 40)
    return oD

}

$r = function (a, b) {
    a = a || 'c'; //cannot be 'color' ?? only abr??
    var values = _.values(oO(a))
    return Oo(a, b) || values[_.random(_.size(values) - 1)]
}
htmll()
function htmll(){
    $.hr = function (c, h, w) {
        var hr = $('<hr>')

        //  if( N(c) ){  return $.hr('z', c, h )  }

        //  hr = $('<hr>').h(h ||2).C(c||'z');

        //  if(w ){ hr.W(w ) }

        return hr
    }

    $.h1 = function () {
        var h = $('<h1>');
        h.A.apply(h, G(arguments));
        h.A()
        return h
    }

    $.h2 = function () {
        var h = $('<h2>');
        h.A.apply(h, G(arguments));
        h.A()
        return h
    }
    $.h3 = function () {
        var h = $('<h3>');
        h.A.apply(h, G(arguments));
        h.A()
        return h
    }
    $.h4 = function () {
        var h = $('<h4>');
        h.A.apply(h, G(arguments));
        h.A()
        return h
    }
    $.h5 = function () {
        var h = $('<h5>');
        h.A.apply(h, G(arguments));
        h.A()
        return h
    }

    $.h6 = function () {
        var h = $('<h6>');
        h.A.apply(h, G(arguments));
        h.A()
        return h
    }


    $.dI = function (id, a, b, c, d, e, f) {
        //dI conflict?
        return $.d(a, b, c, d, e, f).id(id)
    }
    $.dK = function (k) {

        $l('in $.dK')

        var d = $.d()
        d.K(k)
        return d
    }
    $.dD = $.divD = function (c, w, h, x, y) {
        var d, g = G(arguments)
        w = N(w, 200)
        h = N(h, w)
        d = $.d(200, 200, '+')
        if (g.u) {
            return d.C('n')
        }
        if (g.S_) {
            d.C(c)
            if (N(w)) {
                d.W(w)
            }
            if (N(h)) {
                d.H(h)
            }
            if (N(x)) {
                d.X(x)
            }
            if (N(y)) {
                d.Y(y)
            }
            return d
        }
        if (g.N_) {
            return $.dD('o', c, w, h, x)
        }
    }
    $.dA = function func(col, w, height, x, y) {
        var g = G(arguments),


            div = $.d().P('absolute')

        if (U(col)) {
            return div.C('brown')
        }

        if (S(col)) {
            div.C(col);
            if (N(w)) {
                div.W(w)
            }
            if (N(height)) {
                div.H(height)
            }
            if (N(x)) {
                div.X(x)
            }
            if (N(y)) {
                div.Y(y)
            }
            if (g.p) {
                div.dg()
            }
            return div
        }

        if (N(col)) {
            return $.dA('o', col, w, height, x)
        }

    }
    $.dA = $.divA = function (c, w, h, x, y) {
        var g = G(arguments),

            d = $.d().P('absolute'),

            o = g.O ? g.f :
                g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
                {w: g.f, h: g.s, x: g.t, y: g[3]}
        if (N(o.w)) {
            d.W(o.w)
        }
        if (N(o.h)) {
            d.H(o.h)
        }
        d.XY(N(x, 0), N(y, 0))

        if (o.c) {
            d.C(o.c)
        }

        return d
    }
    $.d = $.div = function () {
        var g = G(arguments), d = $('<div>'), o
        o = g.A ? {a: g.f} : g.O ? g.f : S(g[1]) ?
        {c: g.f, k: g.s, w: g.t, h: g[3], x: g[4], y: g[5]} :
            g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
            {w: g.f, h: g.s, x: g.t, y: g[3]}

        if (o.c) {
            d.C(o.c)
        }


        if (N(o.w)) {
            d.W(o.w)
        }
        if (N(o.h)) {
            d.H(o.h)
        }
        if (N(o.x)) {
            d.ab(o.x, N(o.y, 0))
        }
        if (o.a) {
            _.e(g[0], function (g) {
                d.A(g)
            })
        }
        if (o.k) {
            d.K(o.k)
        }
        if (!g.n) {
            d.A()
        }
        if (g.p) {
            d.dg()
        }
        return _d = d
    }
    $.dD = $.divD = function func(col, w, h, x, y) {

        w = N(w) ? w : 200;
        h = N(h) ? h : w;

        var div = $.div(200, 200).drag();

        if (U(col)) {
            return div.C('brown')
        }

        if (S(col)) {
            div.C(col);

            if (N(w)) {
                div.W(w)
            }

            if (N(h)) {
                div.H(h)
            }


            if (N(x)) {
                div.X(x)
            }

            if (N(y)) {
                div.Y(y)
            }

            return div
        }

        if (N(col)) {
            return func('orange', col, w, h, x)
        }
    };
    $.dIl = $.inlineDiv = function (a, b, c) {
        var d = dv(a, b, c);
        d.display('inline');
        return d
    };
    $.ilBl = $.inlineBlockDiv = function (a, b, c) {
        var d = $.d(a, b, c);
        d.display('inline-block');
        return d
    };
    $.dva = function (r, w, h, l, t) {
//color, w, h, left, top
        var g = G(arguments),
            r = g[0], w = g[1], h = g[2], l = g[3], t = g[4], d

        if (!S(r)) {

            return g.n ?

                $.dva($r(), r, w, h, l, '-') :

                g.p ? $.dva($r(), r, w, h, l, '+') :

                    $.dva($r(), r, w, h, l)
        }


        d = $.d(r).p('a').C(r)

        if (g.p) {

            if (w) {
                d.l(w)
            }
            ;

            if (h) {
                d.t(h)
            }

            d.P(16)

            return d.auto()
        }

        w = w || 1;
        h = h || w;
        d.WH(w * 100, h * 100)

        l = l || 0;
        t = t || l;
        d.l(l * 100).t(t * 100)

        if (!g.n) {
            d.dg()
        }

        return d
    }


    $.a= function(a,f){
        var g=G(arguments), a=g[0], f=g[1],la=a||''
        $.a2 =function(a, fn){var g=G(arguments), a=g[0], f=g[1], el=$.a().id(a).A(a);
            if(F(fn)){el.o(fn)} else {el.hr(fn||'#')}
            if(g.n){el.dd()}
            //  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
            if(g.p){el=li(el)}
            if(g.m){el=li(el).K('active')}
            return el}
        l = $('<a>').A(a)//.id(a)
        if(F(f)){  l.$(f)  } else {  l.href( f|| '#' )   }
        // if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }
        //if(g.p){ l = $.li( l ) }
        //if(g.m){ l = $.li( l ).K('active') }
        return l.A()
    }
    $.tg=function(a){return $('<'+a+'>')}
    $.sp=function(){var g=G(arguments),
        sp=$('<span>'), str='';
        _.e(g, function(val){if(S(val)){ str+= val }
        else { sp.A( val ) }});
        if(str){ sp.T(str) }
        sp.A()
        return sp
    }

    $.la=$.liA=  function(){var  g=G(arguments), o,
        a = $('<a>').hr('#'),
        li=$('<li>')
        // if(A(g.f)){     _.e(g.f, function(el){});   return li.A(a)     }
        o= g.F_? {fn: g.f}: g.S_? {id: g.f, fn: g.s}: {el: g.f, fn: g.s}
        o.ht= o.id
        if(o.id){a.id(o.id)}
        if(o.ht){a.html(o.ht)}
        if(o.el){a.A(o.el)}
        if(o.fn){a.$(o.fn)}
        li.A(a)
        return li
    }
    $.lL= $.lib= $.liLb=   function(){
        var  g=G(arguments), o,
            li=$('<li>'),
            lb=$.lb().a2(li)


        if(A(g.f)){
            _.e(g.f, function(el){
                lb.A(el)
            })
            return li
        }

        o= g.F_? {fn: g.f}:
            g.S_? {id: g.f, fn: g.s}:
            {el: g.f, fn: g.s}
        o.ht= o.id
        if(o.id){a.id(o.id)}
        if(o.ht){a.html(o.ht)}
        if(o.el){a.A(o.el)}
        if(o.fn){a.$(o.fn)}

        return li
    }

    $.li=function(){var g=G(arguments), li = $('<li>')
        if( A(g[0]) ){
            _.e(g[0],
                function(g){
                    li.A(g)
                })
        }

        if(g.S_){li.A(g.f)}
        if(g.p){li.K('active')}
        if(g.n){li.k('dropdown')}
        li.A()
        return li
    }
    $.ol=function(o,b){var g=G(arguments),
        ol=$('<ol>');
        _.e(g, function(v){ol.A(v)});
        return ol
    }

    $.ul=function(){var g=G(arguments), o, ul=$('<ul>')
        if(g.A_){
            _.e(g.f, function (el) {
                if (g.p) {if(el.iLi()){el = $.li([el])}}
                if(S(el)){el = $.li(el)}
                ul.A(el)
            })}
        //if(g.p){ul.dg()}
        if(g.n){ul.K('ddm')} else {ul.A()}//dropdown menu
        if(g.p){ul.K('n nbn')}//navbar nav
        // $l(ul.oh())
        return ul
    }

    $.uK= $.ulK=function(k, a,b,c,d){
        var ul = $.ul(a,b,c,d).K(k)
        return ul
    }
    $.liK=function(k, a,b,c,d){
        var li = $.li(a,b,c,d)
        li.K(k)
        return li
    }
    $.t=function(a){var g=G(arguments)
        var t=$('<table>')
        if(A(a)){_.e(a, function(el){
            t.A(el)
        })}
        if(!g.n){t.A()}
        return t
    }
    $.tHR=function(ch){
        var el = $.tr().a2(  $.tH()  )
        if(A(ch)){
            _.e(ch, function(ch){
                if(S(ch)){ch= $.th(ch)}
                el.A(ch)
            })
        }
        return el
    }
    $.tH=function(a){

        var tH =  $('<thead>')

        if(A(a)){_.e(a, function(el){ tH.A(el)  })}

        else if (O(a)){tH.A(a)}


        return  tH

    }
    $.th=function(a){
        var th =  $('<th>')

        if(A(a)){_.e(a, function(el){th.A(el)})}

        else if(S(a)){th.A(a)}

        return th
    }
    $.tB=$.tb= function(){return  $('<tbody>') }
    $.tr=function(a){var g=G(arguments)
        var tr = $('<tr>')
        if(A(a)){_.e(a, function(el){
            if(S(el)){ el = g.p? $.th(el):  $.td(el) }
            tr.A(el)
        })}
        else if(a){ tr.A(a) }
        return tr
    }
    $.td=function(a){var g=G(arguments)
        var td = $('<td>')
        if(A(a)){_.e(a, function(el){td.A(el)})}
        else if(a){td.A(a) }
        return td
    }
    $.cl=function(){ var cl= $('<col>'); return cl }
    $.cg=function(){var cg= $('<colgroup>'); return cg }
    $.br=function(a){
        if (U(a) ){ return $('<br>') }
        var sp = $.sp();
        _.t(a, function(){ sp.A( $('<br>') )  });
        return sp
    }
    $.str=function(){var g=G(arguments), s= $('<strong>');
        _.e(g,function(g){s.A(g)});
        return s
    }
    $.p = function () {
        var g = G(arguments), p = $('<p>')
        if (g.A_) {
            g.eF(function (g) {
                p.A(g)
            })
        }
        else {
            g.e(function (g) {
                p.A(g)
            })
        }
        p.A()
        return p
    }
    $.ps = function () {
        var sp = $.sp(), g = G(arguments)
        g.e(function (g) {
            sp.A($.p(g))
        })
        return sp
    }
    $.pre=function(){
        return  $("<pre>").A()
    }
    $.b=function(a,k){
        var g=G(arguments),b= $('<b>')
        //if(g.p){a =  '&nbsp;'+a  }
        //  b.H(a)
        //  b.K(k)

        if(a){b= b.A(b)}


        if(!g.n){b.A()}
        return b
    }
    $.hdr= function(){//$.H=
        var g=G(arguments), hdr = $('<header>')
        //  return $.ip().ty('header').n(n).v(v)
        g.e(function(q){hdr.A(q)})
        hdr.A()
        return hdr}
    $.F=$.ftr= $.footer=function(){
        return $('<footer>')
    }

    $.nv=function(){return $('<nav>')}
    $.sc= $.sct= function(a){
        var sc = $('<section>')
        if(a){ sc.id(a) }
        return sc
    }
    $.ac= function(){//$.H=$.arg=
        var g=G(arguments), art = $('<article>')
        g.e(function(q){
            art.A(q)
        })
        art.A()
        return art
    }
    $.em=function(){var em= $('<em>'); return em}
    $.tp=function(id){return  $('<template>').id(id)}
    $.as = function () {
        var a = $('<aside>')

        G(arguments).e(function (q) {
            a.A(q)
        })
        a.A()
        return a
    }





////// inputs ////////////// inputs /////////// inputs /////////


    $.sm= $.submit= $.submitButton = function(buttonText, func){
        return $.button(buttonText, func).type('submit')
    }
    $.sb=function(){var g=G(arguments)

        var ip= $.ip()

        ip.at('type','submit')
        ip.A()
        return ip
    }
    $.sbb=function(){var g=G(arguments)

        var ip= $.ip()

        ip.at('type','submit')
        return ip
    }
    $.smBt= $.submitButton=function(){

        var args=G(arguments),

            button = $button.apply(0, args)

        return button.type('submit')

    }
    $.submit2 = sm=function(a){
        var g=G(arguments)

        if(g.p){

            return $button().type('submit').k('btn btn-mini button-default').T( ok(a) )
        }

        return ip('submit').k('show').v( ok(a) )

    }
    $.bts=  function(a,b){
        var g=G(arguments),d=dva(2)
        if(g.p){
            return bts(['start',a],['stop',b]).auto()
        }
        _.e(g,function(v){v=A(v)?v:[v]
            d($button( v[0], v[1] ).k( g.p?('fc'):'' ).M(4))
        })
        return d
    }//floating div of buttons //beta
    $.sm =   function(v){     var el = $('<input>').ty('submit').fS(16)
        if(v){el.v(v)}
        return el}
    $.sb=  function(t, fn){var g=G(arguments),bt= $.bt(t, fn).ty('submit')
        if(g.p){bt.K('btn btn-mini button-default').T( a || 'ok' )}
        //bt.A('submit').K('show')
        return bt}
    $.cb = function (n, v, lb) {
        $._cb = function () {
            return $.ip().ty('checkbox')
        }


        var g = G(arguments), checked, n = g[0], v = g[1], lb = g[2],
            cb, id
        if (g.u) {
            return $('<input type="checkbox">').A()
        }
        if (A(v)) {
            v = v[0];
            checked = true
        }
        id = n + '-' + v
        V = '&nbsp' + v + '&nbsp'
        cb = $.ip().ty('checkbox')
        cb.n(n)
        cb.v(v)
        cb.id(id)
        if (checked) {
            cb.at({checked: 'checked'})
        }
        cb = lb ? $.sp().A(cb, $.lb(l, id))
            : g.p ? $.sp().A($.br(), cb, $.lb(V, id)) :
            !g.n ? $.sp().A(cb, $.lb(V, id)) :
                cb
        return cb.A()

        /*
         $.cb =function(n,v,lb){var g=G(arguments), checked, n=g[0],v=g[1],lb=g[2]
         if(A(v)){v=v[0];checked=true}
         var I=n+'-'+ v,
         V='&nbsp'+v+'&nbsp',
         cbox = $.input().type('checkbox').n(n).v(v).id(I)
         if(checked){cbox.attr({checked:'checked'})}
         return lb? $.span().A(cbox , $.lb(l,I))
         :g.p? $.span().A( $.br(), cbox , $.lb(V,I))
         :g.N? $.span().A(cbox , $.lb(V,I) )
         :cbox }
         $.cb = function self(n ,v,id, makeDivWithLabel){var g=G(arguments);
         n = g.f||''; v = g.s||'';id = g.t||'';
         cb= $.ip().ty('checkbox')
         sp  = $.sp()
         if(g.A_){_.e(g, function(ar){
         sp.A($.cb(ar[0], ar[1], ar[2], ar[3]),
         $.lb(ar[1], ar[2]))});
         return sp.A($.br())}
         cb.n(n).v(v).id(id);
         if(g.p){cb.prop('checked', true)}
         if(makeDivWithLabel!==false){cb = $.dK('checkbox').A($.lb(n).prepend( cb ))}
         return cb}
         */

    }
    $.cbG = function (n, v) {

        var g = G(arguments), n = g[0], v = g[1], sp = sp();
        if (g.p) {
            _.e(v, function (v) {
                sp.A($.cb(n, v, '+'))
            })
        }
        else {
            _.e(v, function (v) {
                sp.A(
                    $.cb(n, v))
            })
        }
        return s.id(n)
    }
    $.cbl = $.cbLb = function () {
        var g = G(arguments)
        return $.sp().A(
            $.cb(g.f, g.s, g.t, g[3]), $.lb(g.f, g.s))
    }
    $.rb = function () {
        var g = G(arguments),
            chkd, n = g[0] || 'n', v = g[1], lb = g[2];
        if (A(v)) {
            v = v[0];
            chkd = true
        }
        var I = n + '-' + v,
            V = '&nbsp' + v + '&nbsp',
            rbox = $.ip().ty('radio').n(n).v(v).id(I);
        if (chkd) {
            rbox.at({checked: 'checked'})
        }
        return l ?
            $.sp().A(rbox, $.lb(lb, I))
            : g.p ?
            $.sp().A($.br(), rbox, $.lb(V, I))
            : g.N ?
            $.sp().A(rbox, $.lb(V, I))
            : rbox
    }
    $.rbG = function (n, v) {
        var g = G(arguments), n = g[0], v = g[1], sp = $.sp()
        if (g.p) {
            _.e(v, function (v) {
                sp.A($.rb(n, v, '+'))
            })
        }
        else {
            _.e(v, function (v) {
                    sp.A($.rb(n, v))
                }
            )
        }
        return sp.id(n)
    }
    $.rg= function(n, m, M){
        m=N(m)?m:0;
        M=N(M)?M:100;
        n=n||'r';
        var r =  $('<input type="range">');
        r.attr({ name:n,  min:m,  max:M  });
        return r
    }
    $.ip= function(n){var g=G(arguments), o, ip
        ip = $('<input>').at('type','text')
        if(n){ ip.n(n);  ip.id(n) }
        o = g.O? g.f:
            g.N_? {w:g.f,id:g.s} :
            {ph:g.f, id:g.s, v: g.t|| g.s, n:g.t|| g.s}
        ip.ph(o.ph)
        if(o.w){ip.W(o.w)}
        if(o.id){ip.id(o.id) }
        if(o.v){ip.v(o.v)}
        if(o.n){ip.n(o.n)}
        ip.C( o.C||'r').col(o.c||'b')
        if(!g.n){
            ip.K('form-control')
            ip.A() }
        return ip
    }
    $.ipBt = function(btT,f){
        return $.d().A($.ip(),
            $.bt(btT,function(){f.A( ip.V() )})).A()}
    $.pw =function(n){
        var el = $('<input>').ty('password')
        if(n){el.n(n)}
        return el
    }


    $.bt=  $.button=function(){var g=G(arguments), o,bt = $('<button>');
        o = g.F? {fn: g[0]} : { t : g[0], fn: g[1] };
        o.t = o.t || 'submit';
        if(!g.n){bt.A()}
        return bt.T(o.t).$(o.fn)
    }
    $.BT= $.btL=  function(t, fn){
        if(F(t)){return $.bt('submit', t)}
        var b=$('<button>');
        b.text(t);     b.$(fn)
        return b.K('btn-lg')

        /*
         $.btL=  function(t,f,C,c){
         var g=G(arguments),
         t=g[0],f=g[1],C=g[2],c=g[3],
         t=t||'ok', k=  'btn-lg' , C=C||'b', c=c||'y';
         b = $.bt().K('btn-lg').c(C, c);
         b(t);if(f){ b.o( f ) }
         if( g.n ){ b.dd() }//dropdown
         return b
         }
         */

    }
    $._bt= $.btM= function(t,fn){return $.bt(t, fn).C('b').K("btn btn-mini" )}
    $.bts=  function(a,b){
        var g=G(arguments),d=$.dA(200);
        if(g.p){return $.bts(['start',a],['stop',b]).auto()}
        g.e(function(v){v=A(v)?v:[v];
            d.A($.bt( v[0], v[1] ).k( g.p?('fc'):'' ).M(4))
        })
        return d}//floating div of buttons
    $.btR=  function(t,fn){
        var b = $.bt(t,fn).float('right')//.display('block')
        return b
    }
    $.$bt= $.btLf=function(t,fn){var b = $.bt(t,fn).float('left')//.display('block')
        return b}
    $.bX=$.btX=function(t,fn){var g=G(arguments),bt,o;
        o={
            url: g.f,
            data: g.s
        }

        t=  t || g.p? 'submit':'X'
        fn = fn ||  function (){var bt=this;
            $.aj({url: o.url, data: o.data, type: 'DELETE',
                success: function (){$(bt).pa().rm(); if(g.n){$.rl()}}})}

        bt= $.bt(t, fn)

        return bt
    }
    $.btR=  function(text, func){
        var b = $.button(text, func).float('right')//.display('block')
        return b
    }
    $.btL=  function(text, func){
        var b = $.button(text, func).float('left')//.display('block')
        return b
    }

    $.ta= $.textarea =   function(rows,cols,Cl,cl){

        var g=G(arguments),
            ta =  $('<textarea>')

        Cl=Cl||'pink'
        cl=cl||'black'

        if(g.N){
            ta.K('form-control')}

        if(N(rows)){
            ta.attr({rows: rows})}
        if(N(cols)){
            ta.attr({cols: cols})}

        return ta.C(Cl, cl)
    }
    $.ta= function(rows,cols,Cl,cl){var g=G(arguments),
        ta =  $('<textarea>');
        Cl=Cl||'p';
        cl=cl||'z';
        if(g.N){ta.K('form-control')}
        if(N(rows)){ta.at({rows: rows})}
        if(N(cols)){ta.at({cols: cols})}
        return ta.C(Cl, cl)}
    $.o= $.op=function(n,v){var g=G(arguments),
        o= $('<option>')

        o.A( g.f );
        o.v( g.s  || g.f)


        // n = n||'option';  v=v||n; o.T(n).v(v)
        // o.V( g[0] )

        if(g.p){
            o.at({selected: true})
        }

        o.A()
        return o

    }
    $.og=$.opGr= function(lb){var g=G(arguments), o,og
        o=g.S_? {lb:g.f, ch: g.s} : {ch:g.f}
        og=  $('<optgroup>')
        if(o.lb){og.at('label',o.lb)}
        if(o.ch){if(A(o.ch)){_.e(o.ch,function(q){
            //if(N(q)){q =''+ q }
            if(S(q)){
                q = $.o(q)
            }
            og.A(q)
        })}
        else {  og.A( o.ch )  }}
        og.A()
        return og
    }
    $.f=$.form = function(c, act){
        var g=G(arguments),
            o, f= $('<form>').K('form')
        o=g.A? {ch: g.f} : {c:g.f, a:g.s}
        if(o.ch){g.eF(function(el){f.A(el)})}
        if(o.a){f.attr({ action: o.a})}
        if(o.c){f.C(o.c)}
        f.attr({ method: g.p? 'get':'post' })
        if(!g.n){f.A()}
        return f
    }
    $.f.gr= $.fG= $.fGD=function(){return $.dK('form-group').fS(20)}
    $.formGet=function(c, act){var g=G(arguments), c =g[0],  act =g[1],
        f  = $.f().K('form').attr('method', 'get')
        if(c){f.C(c)}
        if(act){f.at({ action: act})  }
        return f}
    $.fI= $.formInline=function(a,b){
        var f =  $.form().C('b').K('form-inline form-group'),
            g=G(arguments);
        _.e(g, function(g){f.A(g) });
        if(g.p){  f.A( $.submit('ok') ) }
        return  f
    }
    $.f.i= $.fR= $.formRight=function(a,b){ var g=G(arguments),
        f =  $.form().C('b').K('form navbar-form navbar-right');
        _.e(g, function(g){f.A(g) });
        if(g.p){  f.A( $.submit('ok') ) }
        return  f
    }
    $.f.f= $.fF= $.formFalse=function(a,b){   var g=G(arguments),
        f  = $.form().C('b').K('form well').attr({ method: false,  action: false });
        _.e(g, function(g){f.A(g) });
        if(g.p){  f.A( $.submit('ok') ) }
        return  f}
    $.l=  function(t, fr, n, ph){  alert('$.l')
        var g=G(arguments), lb = $('<label>'),

            ip, sp
        if( !g.f ){ return lb }
        lb.for(fr).K('control-label').h(t)
        if( !g[2] ){ return lb }
        ip = $.ip().id(fr).n(n).ph(ph||'...')
        if(!g.n){ ip.K('form-control')}
        sp= $.sp().A(lb,   ip )
        if(!g.n){ $l('adding sp'); sp.A() }
        return sp
    }
    $.lb=function(){ var g=G(arguments), o, lb= $('<label>')
        o= g.A_? {ch: g.f} : {t: g.f, fr: g.s}
        if(o.ch){
            _.e(o.ch,function(ch){
                lb.A(ch) })
            return lb }
        lb.ht(o.t).for(o.fr)
        //fr=fr||t
        //lb.K('control-label')
        if(!g.n){ lb.A() }
        return lb


    }
    $.sl=function(){var g=G(arguments), sl=  $('<select>').A()

        if(g.A_){

            g.eF(function(o){
                if(N(o)){o=''+o}
                if(S(o)){ o=$.o(o) }
                sl.A(o)
            })

        }


        if(g.p){sl.multiselect()}
        /*
         //if(!A(g.f)){g.unshift( ['select'] )}
         if(A(g.f)){
         sl= $.sel.apply($, g.f);
         _.e(g.r,function(v){
         if(S(v)){v = $.op(v)}
         sl(v)})}
         else {sl= $.sel();
         _.e(g,function(v){if (S(v)) {v = $.o(v)}
         sl(v)})  }
         */
        sl.V=function(v){
            if(U(v)){return sl.q.v()}
            sl.v(v);return sl}

        sl.o=function(f){f=f||alert
            sl.change(function(){ f(sl.V()) })
            return sl}


        if(g.O){g.eF(function(v,k){

            sl.A($.o(k,v))

        })}



        return sl
        //$.sl(['volvo', $.op('merc'), 'saab' ])
//$('<select multiple>').A().A(  $.op('merc'),        $.op('merc1'),        $.op('merc2'))
//$('<select size="3">').A().A($.op('merc'), $.op('merc1'),  $.op('merc2'))
    }
    $.SEL =  function(n,i){var g=G(arguments),sl

        sl=  $('<select>')
        sl.n(n).id(i)
        if(!g.n){sl.K('form-control')}
        if(g.p){sl.at({mutiple:true})}
        return sl
    }
    $sel=function(){var g=G(arguments)
        var sl= $.sl().id(g.f)
        _.e(g.r, function(g){
            var o= $.op(g).v(g)
            sl.A(o)
        })
        sl.A()
        return sl}
    $t = function(a, b){if(b2d.test){
        var g=G(arguments), a=g[0], b=g[1],str
        if(D(b)){ str='||'
            _.e(g, function(s){str+=  ' '  + s.toString() + ' |'})
            str += '|'}
        else {str = a.toString()}
        $l(str)}
        return a
    }


    $.fn.el = function(e){
        if(U(e)){
            console.log( $('<div>').append(  this.clone()  ).html() )
            return this}}
    $.fn.el = function(e){
        if(U(e)){
            console.log( $('<div>').append(  this.clone()  ).html() )
            return this}}
    $.fn.h1 = function(text){

        this.A($.h1(text))
        return this}
    $.fn.h2 = function(text){

        this.A($.h2(text))
        return this}
    $.fn.h3 = function(text){

        this.A($.h3(text))
        return this}
    $.fn.h4 = function(text){

        this.A($.h4(text))
        return this}
    $.fn.h5 = function(text){

        this.A($.h5(text))
        return this}
    $.fn.h6 = function(text){

        this.A($.h6(text))
        return this}
    $.fn.H5=function(a){return $.h5(a).a2(this)}
    $.fn.h1 = function (t) {
        return this.A($.h1(t))
    }
    $.fn.h2 = function (text) {

        this.A($.h2(text))
        return this
    }
    $.fn.h3 = function (text) {

        this.A($.h3(text))
        return this
    }
    $.fn.h4 = function (text) {

        this.A($.h4(text))
        return this
    }
    $.fn.h5 = function (text) {

        this.A($.h5(text))
        return this
    }
    $.fn.h6 = function (text) {

        this.A($.h6(text))
        return this
    }
    $.fn.sb =function(fn){return  this.submit(fn)}
    $.fn.a2Lb=function(t){
        t=t||'label:'; return this.a2($.lb(t))
    }
    $.fn.hr = function (href) {
        this.attr({href: href})
        return this
    }
    $.fn.isLi = $.fn.iLi = function () {
        return _.isElement(this) && _h('HTMLLIElement', this)
    }
    $.fn.li = function () {
        var g = G(arguments),
            li = $.li()
        this.A(li)
        g.e(function (g) {
            li.A(g)
        })
    }
    $.fn.C$ = function (s) {
        if (s) {
            $l(s + ' !!!')
        }
        return this.C($r())
    }


    $.frg=function(){
        return $(


            document.createDocumentFragment()
        )

    }
    $.bd=function(){var dc
        bd = $('body')
        return bd
    }
    $.x= $.E=z=$.z=$.show=function(c,t){var g=G(arguments)
        $('body').empty()
        bd= $.bd()
        if(g.O_){

            $CSS(g.f)
            if(g.s){$.h1(g.s);$.hr().A()}
            bd.C($r())
            return $}

        if(c){bd.C(c)} else {bd.C($r())}
        if(t){bd.A($.h1(t))}
        if(g.p){bd.A($.hr())}
        return $
    }
    $.h=function(){var g=G(arguments),o
        bd= $.bd()
        bd.empty()
        bd.C($r())
        o= g.S_? {t:g.f, s: g.s}: {s: g.f}
        if(o.s){$CSS(o.s)}
        if(o.t){$.h1(o.t);$.hr().A()}
        return $
    }
    $.fU= $.fileUpload =  function(lb, t){
        var fG =  $.d().K("form-group").A(
            $.lb(  D(lb) ? lb  : 'upload file',  'upl'  ).K('control-label').fS(20),
            $.ip().ty('file').id('upl').name('i')
        )
        if(t){
            fG.A(   $.p(t).K('help-block')   )}
        return fG
    }


    ipsum()
    function ipsum(){

        $.ips=function(len){   len = len || 1;
            var str = '';
            _.t(len, function(){
                str = str + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
            });
            return str}
        $.ipsP=function(len){return $.p().A($.ipsum(len) )}


        ips1 = 'dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam' +
        'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
        ips2 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
        'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo' +
        'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat' +
        'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore' +
        'te feugait nulla facilisi.'

        ips3 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper' +
        'suscipit lobortis nisl ut aliquip ex ea commodo consequat.' +
        'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' +
        'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
        'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue' +
        'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,' +
        'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
        'ut laoreet dolore magna aliquam erat volutpat.'

        $.fn.ipsum=function(){    var that =this

            _.each(arguments, function(num){
                that.A( $.ipsum(num) )
            })

            return this}
        $.fn.ipsumP=function(){
            var that =this

            _.each(arguments, function(num){
                that.A( $.ipsumP(num) )
            })
            return this}
        $.fn.ips = $.fn.ipsum = function () {
            var that = this

            _.each(arguments, function (num) {
                that.A($.ipsum(num))
            })

            return this
        }
        $.fn.ipsumP = function () {
            var el = this

            _.e(arguments, function (num) {
                el.A($.ipsumP(num))
            })
            return el
        }

    }
}
graf()
function graf(){
    $l('image')
    $src =    function f(e){
        var _src=function(a){ a = _.ext(a);
            return s$(a).startsWith('/')? a : '/'+ a };
        //if(Q(e)){$l('q');e=$(e)[0]}
        if( e.image ){ e=e.image}
        if( C(e) ){ e = C(e) }
        if( e.src ){ e = e.src}
        if( e.toDataURL ){  e=tDU(e) }
        return s$(e).contains('data:')?  e
            :  S(e) ?  _src(e)
            : 0
    }
    $.iI=function(i){if(O(i)){
        return S($(i)[0].src)}}
//good for engine
    _Img=function(){return new Image()}
    _$Img=function(){return $(_Img())}//good for wappy
//gets rid of auto-scaling quirk/*     i.i=i.l=i.load(function(i){     i._ =i[0]     //i = $(i.target)     // img.W( img.W() )     // img.H( img.H() ) })*/
// $.im = function(img, func){i = $.img().src(img);func(i[0]);return i}//s$(e).contains('data:')
    $.i=$.img= function(){var g=G(arguments), i= _$Img(),

        o= F(g.f)? {fn: g.f}: {sr: g.f, fn: g.s}
//i.l(function(e){o.fn($(e.target), e)})


        return i
    }
    $.i = $.img = function(){var g=G(arguments),i=_$Img(),

        o= F(g.f)? {fn: g.f}: {sr: g.f, fn: g.s}

        i.i=function(sr){
            if(U(sr)){return this[0].src}
            this.src($src(sr));
            return this
        }
        i.r=function(fn){
            this.load(function(e){
                fn(e, i)
            });
            return this
        };

        i.r(function(_i){i._=_i.target});

        if(o.fn){
            i.r(o.fn)
            i.load(function(ev){o.fn($(ev.target), ev)})

        }

        if(o.sr){

            i.src($src(o.sr))
            i.i(o.sr)
        }

        //i.A()
        return i
    }//i.load(function(i){$(i.target)}) //var i = // i.W( i.W() ) // i.H( i.H() )//gets rid of auto-scaling quirk
    $.i2 = $.img2 = function (img, func) {

        i = $.img().src(img)

        func(i[0])

        //s$(e).contains('data:')
        return i
    }

    E = function E(a, b, c) {
        if (O(a)) {
            a = O(a.e) ? a.e : O(a.c) ? a.c : a
            a = $(a)[0]
            if (_.isElement(a)) {
                return a
            }
        }
    }
    $.isCan = function (can) {
        if (O(can)) {
            return $(can)[0].constructor.name == "HTMLCanvasElement"
        }

    }
    $.imageSizeFuncCan = function(image, size, func){//xc=
        var x = $.c(100, 100).C('X')
        if(image){ x.fit(image) }
        //if(size){  x.Z(size) }
        if(func){  x.click(func) }
        return x
    }
    C = function (a) {
        if (_.isObject(a = E(a) || a)) {
            return a.canvas ? a.canvas :
                s$(a.toString()).contains('Canvas') ? Q(a)[0] : 0
        }
    }
    $.iC = $.isCan = function (can) {
        if (O(can)) {
            return $(can)[0].constructor.name == "HTMLCanvasElement"
        }
    };
    $.fit = function (a, b, c) {
        return $.c(c || 'r', b || 700, b || 700).A().fit(a || 'me')

    }

    $.C=function(){ z();
        c = $.c('y',900,500).A().drag()
        x = c.ctx()
    }

    _superCanvas=function(el){
        el.W = function (width) {
            var args = G(arguments)
            width = args[0]
            if (U(width)) {
                return this.attr('width')
            }
            if (args.N) {
                var dataUrl = this.toDataURL()
            }
            this.attr('width', width)
            if (args.N) {
                this.fit(dataUrl)
            }
            return this
        }
        el.H = function (height) {
            var args = G(arguments)
            height = args[0]
            if (U(height)) {
                return this.attr('height')
            }
            if (args.N) {
                var dataUrl = this.toDataURL()
            }
            this.attr('height', height)
            if (args.N) {
                this.fit(dataUrl)
            }
            return this
        }
        el.WH = function (w, h) {

            if (U(w)) {
                var width = this.W(),
                    height = this.H()
                return {
                    width: width, w: width,
                    height: height, h: height
                }
            }

            h = h || w

            return this.W(w).H(h)
        }
        el.Z = function (d) {
            d = d || 5;
            return this.WH(d * 100, d * 100)
        }
        el.offsetLeft = el.l = function (theOffset) {

            if (!theOffset) {

                return offsetLeft(x.q)
            }

            return parseInt(theOffset - x.offsetLeft())
        };
        //  el.ox=function(){return x.q.q.offset().left}
        el.offsetTop = el.t = function (y) {
            if (!y) {
                return offsetTop(y.q)
            }
            ;
            return parseInt(y - x.offsetTop())
        };
        //  el.oy=function(){return x.q.q.offset().top}
        el.copy = function () {
            el.img.src(el.toDataURL())
            return el
        }
        el.paste = function () {
            var g = G(arguments)
            if (g.N) {
                el.clearRect()
            }
            if (g.p) {
                el.fit(el.img)
            }
            else {
                el.draw(el.img.src())
            }
        }
        el.save = function () {
            el.context.save()
            return el
        }
        el.restore = function () {
            el.context.restore()
            return el
        }
        //dont mix up with element/jquery alpha
        //maybe opacity for element and alpha for canvas?
        el.globalAlpha = el.alpha = el.op = function (alpha) {
            if (U(alpha)) {
                return this.context.globalAlpha
            }
            this.context.globalAlpha = alpha

            return this
        }
        el.comp = el.globalCompositionOperation = el.gc = function (compOp) {
            if (U(compOp)) {
                return this.context.globalCompositeOperation
            }
            this.context.globalCompositeOperation = oO('g', compOp)
            return this
        }
        //normal prop (as methods)
        el.lineWidth = function (w) {
            if (U(w)) {
                return el.context.lineWidth
            }
            el.context.lineWidth = w
            return el
        }
        el.lineCap = function (w) {
            if (U(w)) {
                return el.context.lineCap
            }
            el.context.lineCap = w
            return el
        }
        el.lineJoin = function (w) {
            if (U(w)) {
                return el.context.lineJoin
            }
            el.context.lineJoin = w
            return el
        }
        el.URL = el.dataURL = el.toDataURL = function () {
            return el.canvas.toDataURL()
        }
        //wap specific
        el.snap = function (func) {

            pams = {

                d: el.toDataURL(),

                dats: el.dats

            }

            $.post('/img', pams, func)

        }
        el.img = $.img()
        el.img.src(el.toDataURL())
        el.dots = function () {

            el.copy()
            el.DOTS = []
            el.dats = []

            el.$(function (x, y) {

                x = parseInt(x)
                y = parseInt(y)

                el.cir(x, y)

                el.DOTS.push([x, y])
                el.dats.push(x)
                el.dats.push(y)
                el.line(el.DOTS)

            })


            el.$$(function (X, Y) {
                var du
                //el.C('X')
                el.off('click')
                el.closePath()  //el.paste() // el.copy()  //el.save()
                el.clear() //du = el.toDataURL()
                el.clip()
                el.paste() //el.fit(du)
            })

            return el
        }
        el.me = function me(n) {//randomly draw my face
            var g = G(arguments), n = g[0] || 200
            if (x.me.d) {
                clearInterval(x.me.d);
                x.me.d = false
            }
            else {
                x.me.d = I(function () {
                    x.d($w['mug'] || 'me', _r(x.w() - 200), _r(x.w() - 200))
                }, n)
            }
            return x
        }
        el.me.shouldDrawMeId = false
        el.mugX = function (m) {
            qP('/mug', {u: m}, function (m) {
                x.fit(m)
            })
            return x
        }
        el.tick = function () {
            var ctx = this.ctx()
            ctx.tick.apply(ctx, arguments)
            return this
        }
        el.URL = el.dataURL = el.toDataURL=function(){
            return el.canvas.toDataURL()
        }



        superCanvasDraw(el)
        superCanvasGradient(el)
        superCanvasPixels(el)
        superCanvasText(el)
        superCanvasTransform(el)
        superCanvasPath(el)
        superCanvasEvents(el)
        superCanvasShadow(el)


        function superCanvasGradient(el) {
            CanvasGradient.prototype.stop = function (num, col) {
                var that = this

                if (N(num)) {
                    this.addColorStop(num, oO('c', col))
                }

                if (A(num)) {
                    _.each(arguments, function (arg) {
                        that.stop(arg[0], arg[1])
                    })
                }

                return this
            }
            var addColorStop = function rc(gradient, stop, color) {

                // pass only a gradient -> function with gradient curried
                // add a color stop to a gradient

                if (U(stop)) {
                    return _.partial(rc, gradient)
                }

                gradient.addColorStop(stop, oO('c', color))

                return gradient
            }
            var SuperGradient = function (gradient) {
                gradient.stop = function (stop, color) {
                    addColorStop(gradient, stop, color);
                    return gradient
                }


                gradient.stops = function (stopObject) {
                    _.e(stopObject,
                        function (v, k) {
                            var o = S(v) ? {k: k, v: v} : {k: v, v: k}
                            addColorStop(gradient, o.k, $r('c', o.v))
                        })
                }
                return gradient
            }

            el.linearGradient = el.lG = el.createLinearGradient = function (a, b, c, d) {
                a = a || 0
                b = b || 0
                c = c || this.W()
                d = d || this.H()
                return SuperGradient(this.context.createLinearGradient(a, b, c, d))
            }
            el.linGradBlackToWhite = function () {
                grd = this.linearGradient(0, 0, this.W(), 0)
                grd.stop(0, "black").stop(1, "white")
                this.fillStyle(grd)
                this.fillRect()
            }
            el.linGradDiagnal = function (grd) {
                grd = grd || this.lG()
                grd.stop(0, 'r')
                grd.stop(.1, 'r')
                grd.stop(.15, 'b')
                grd.stop(.2, 'r')
                grd.stop(.5, 'y')
                grd.stop(1, 'b')
                this.fillStyle(grd)
                this.fillRect()
                return this
            }
            el.radialGradient = el.rG = el.createRadialGradient = function rg() {
                var g = G(arguments)
                g[0] = g[0] || 200
                g[1] = g[1] || 200
                g[2] = g[2] || 100
                g[3] = g[3] || 250
                g[4] = g[4] || 250
                g[5] = g[5] || 800
                return this.context.createRadialGradient(g[0], g[1], g[2], g[3], g[4], g[5])
            }
            el.radGradSample = function () {

                var grd = this.rG()

                addColorStop(grd, 0, 'r')
                addColorStop(grd, .15, 'b')
                addColorStop(grd, .2, 'r')
                addColorStop(grd, .5, 'y')
                addColorStop(grd, 1, 'b')

                this.fillStyle(grd)
                this.fillRect()
                return this
            }
            el.growingSun = function () {
                var that = this

                var a = 0,
                    b = 1000,
                    grd

                var func = function () {

                    a += 1
                    b -= 2

                    grd = that.rG(200, 200, a, 290, 270, b)

                    grd.addColorStop(.1, 'Yellow')

                    grd.addColorStop(.3, 'Red')

                    grd.addColorStop(1, 'Violet')

                    //  gradient = x.grad( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )

                    that.fillStyle(grd)
                    that.fillRect()


                }

                setInterval(func, 100)

            }
            el.pattern = el.createPattern = function (im, pat) {
                //im = im || $.img('me')[0]
                var pattern = this.context.createPattern(im, pat || 'repeat')
                return pattern
            }
            el.testPattern = function () {
                var that = this
                $.img('me', function (img) {
                    var pattern = that.pattern(img[0], 'repeat')
                    that.fillStyle(pattern).fillRect()
                })


            }
        }
        function superCanvasPixels(el) {
            el.gD = el.getData = function (x, y, w, h) {
                //historic.. dont delete ! data = x('G', X, Y, w, h).res


                var g = G(arguments),

                    x = g[0] || 0,
                    y = g[1] || 0,
                    w = g[2] || this.W(),
                    h = g[3] || this.H(),

                    data = this.context.getImageData(x, y, w, h)

                // data.h = data.height
                // data.w = data.width
                // data.d = data.data

                return data
            }
            el.pD = el.putData = function (data, x, y) {
                x = x || 0
                y = y || 0
                this.context.putImageData(data, x, y)
                return this
            }
            el.gP = el.getPut = function (a, x, y) {
                var g = G(arguments),

                    a = g[0],
                    x = g[1],
                    y = g[2],

                    data = this.gD.apply(this.context, a)
                if (g.n) {
                    this.clear()
                }
                return x.pD(data, x, y)

            }
            el.pixelsNegative = function () {


                var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
                    data = imgData.data


                for (var i = 0; i < data.length; i += 4) {
                    data[i] = 255 - data[i];
                    data[i + 1] = 255 - data[i + 1]
                    data[i + 2] = 255 - data[i + 2]
                    data[i + 3] = 255
                }

                this.pD(imgData) //  this.pD(data,0,0)


            }
            el.pixelsInvert = function () {

                var imgData = this.gD(),
                    data = imgData.data


                for (var i = 0; i < data.length; i += 4) {
                    data[i] = 225 - data[i];
                    data[i + 1] = 225 - data[i + 1]
                    data[i + 2] = 225 - data[i + 2]

                }

                this.pD(imgData)


            }
            el.pixelsGrayscale = function () {

                var imgData = this.gD(),
                    data = imgData.data


                for (var i = 0; i < data.length; i += 4) {
                    var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    data[i] = avg
                    data[i + 1] = avg
                    data[i + 2] = avg
                }

                this.pD(imgData) //  this.pD(data,0,0)


            }
            el.pixelsFade = function () {


                var imgData = this.gD(),
                    data = imgData.data

                for (var i = 7; i < _.size(data); i += 4) {
                    data[i] = 90
                }

                this.pD(imgData)

                return el
            }


        }
        function superCanvasTransform (el) {

//give scale cos(rads), skew:sin(rads)  ??
            el.norm = function () {
                el.context.scale(this.W() / 10, this.H() / 10)
                return this
            }


            el.scale = el.sc = function (X, Y) {
                var g = G(arguments),
                    X = g[0] || 1, Y = g[1] || X
                x.x.scale(X, Y)
            }
            el.translate = el.tr = function (X, Y) {
                var g = G(arguments),
                    X = g[0] || 1, Y = g[1] || X
                x.x.translate(X, Y)
            }
            el.rotate = el.rt = function (r) {
                var g = G(arguments),
                    r = g[0] || 1
                //r=pi(-6)*r
                //x.fr(0,0,1,1)
                //x({f:$r('c')
                x.x.rotate(r)
            }
            el.transform = el.tf = function rc(a, c, e, b, d, f) {
                var g = G(arguments)
                if (g.p) {
                    return rc(2, 0, 0, 2, 0, 0)
                }
                return x('t', a, c, e, b, d, f)
            }
            el.setTransform = el.stf = function rc(a, c, e, b, d, f) {
                var g = G(arguments)
                if (g.p) {
                    return rc(2, 0, 0, 2, 0, 0)
                }
                return x('st', a, c, e, b, d, f)
            }


            return el
        }
        function superCanvasText(el) {

            el.font = function (font) {
                this.context.font = $l(HTML5.font(font))
                return this
            }

            el.strokeText = function (t, X, Y) {
                var g = G(arguments),
                    t = g[0],

                    X = g[1] || 100,
                    Y = g[2] || X

                this.context.strokeText(t, X, Y)

                return this
            }
            el.fillText = function (t, X, Y) {
                var g = G(arguments),
                    t = g[0],
                    X = g[1] || 100,
                    Y = g[2] || X
                if (g.p) {
                    this.tx(t, X, Y, '-')
                    this.tx(t, X, Y)
                }
                else this.context.fillText(t, X, Y)
                return this
            }
            el.measureText = el.measure = function (t) {
                return this.context.measureText(t)
            }
            el.textWidth = function (t) {
                return parseInt(this.measureText(t).width)
            }
            el.centerHorizontalText = function (text, height) {

                this.fillText(text,
                    this.W() / 2 - this.textWidth(text) / 2,
                    height
                )

                return this
            }


        }
        function superCanvasDraw(el) {

            //this just a simple proxy to drawImage // dont use?
            el.drawImage = el.dI = function () {
                var el = this, g = G(arguments)

                g[1] = N(g[1]) ? g[1] : 0
                g[2] = N(g[2]) ? g[2] : 0

                $(el)[0].getContext('2d').drawImage.apply(
                    $(el)[0].getContext('2d'), g
                )
            }

            //this will create the image (from string), and then draw it
            el.draw = function () {
                var el = this, g = G(arguments), i = g[0]
                $.i(i, function (e, i) {

                    $l('draw')
                    ii = i
                    g[0] = i[0]
                    el.dI.apply(el, g)
                })

            }


            el.fit = function f(i, x, y) {
                var el = this

                $l('fit: - el.W():' + el.W())
                i = i || 'me'
                x = x || 0
                y = y || 0
                el.draw(i, x, y, el.W(), el.H())
                //el.draw(img, X, Y, el.width(), el.height())
                return el
            }


            el.drawMug = el.me = function me(interval) {
                //randomly draw my face

                var that = this, g = G(arguments), args = g,

                    interval = args[0] || 200

                if (that.drawMug.shouldDrawId) {

                    clearInterval(that.drawMug.shouldDrawId)

                    that.drawMug.shouldDrawId = false
                }

                else {

                    that.drawMug.shouldDrawId = setInterval(function () {

                        that.draw(window['mug'] || 'me', _.random(that.W() - 200), _.random(that.W() - 200))

                    }, interval)
                }

                return this
            }
            el.drawMug.shouldDrawId = false

            el.fitMug = el.mug = function (user) {

                var that = this

                $.post('/mug', {u: user}, function (userMug) {
                    that.fit(userMug)
                })

                return this
            }

            el.crop = function rc(x1, y1, x2, y2) {

                if (A(x1)) {

                    return rc(
                        x1[0], x1[1],
                        x1[2] - x1[0],
                        x1[3] - x1[1]
                    )
                }

                this.context.drawImage(x, x1, y1, x2, y2, 0, 0, this.W(), this.H())
                return this
            }


            el.crop2 = function rc(x1, y1, x2, y2) {
                if (A(x1)) {
                    return rc(x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1])
                }

                return el.draw(
                    el.toDataURL(),
                    x1, y1, x2, y2,
                    0, 0, this.W(), this.H()
                )

            }


            el.scaleImCen = function (img, s) {

                var w = this.W(), h = this.H(), s = s || 1

                this.draw(img,

                    w * s / -2 + w / 2,
                    h * s / -2 + h / 2//+ w/2
                    ,

                    w * s,
                    h * s)
            }
            el.scaleImCenSpiralMe = function () {
                var scaleNum = 1,
                    that = this

                _.times(100, function () {

                    that.scaleImCen('me', scaleNum)
                    scaleNum *= .9
                })

            }
            el.scaleImCenSpiral = function () {

                var scaleNum = 1,
                    that = this

                _.times(100, function () {

                    that.scaleImCen('me', scaleNum)
                    scaleNum *= .9
                })

            }

            el.dC = function f(i, x, y) {

                var that = this

                i = i || 'me'
                x = x || 100
                y = y || 100


                if (U(x)) {//draw img in center of can
                    $.img(i, function (i) {
                        that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
                    })
                }

                else {//draw it by specifying location of its center
                    y = y || x
                    $.img(i, function (i) {
                        that.draw(i, x - i.W() / 2, y - i.H() / 2)
                    })
                }

                return this
            }
            //draw it where u say, but as if its reg point was its center
            el.drawRegCenter = el.dC2 = function f(i, x, y) {
                var that = this
                $.img(i, function (i) {
                    that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
                })
                return this
            }
            el.Cd = function (a, x, y) {
                var that = this

                a = a || 'me'
                x = x || 100
                y = y || 100

                $.img(a,

                    function (img) {

                        that.drawImage(
                            img.src,
                            x - img.W() / 2,
                            y - img.H() / 2
                        )
                    })

            }

            return this
        }
        function superCanvasPath(el) {
            el.s = el.ss = el.strokeColor = setStrokeColor = function (c) {
                el.context.strokeStyle = oO('c', c)
                return el
            }
            el.f = el.fs = el.fillColor = setFillColor = function (c) {
                el.context.fillColor = oO('c', c)
                return el
            }
            el.fillStyle = function (fs) {
                if (U(fs)) {
                    return this.context.fillStyle
                }
                this.context.fillStyle = fs
                return this

            }
            el.fsX = function (c, sc) {
                var g = G(arguments)
                if (O(c)) {
                    x.x.fillStyle = c;
                    return x
                }
                if (c = g.p ? $r('c', c) : Oo('c', c)) {
                    x({f: c})
                }
                if (D(sc)) {
                    x.ss(sc)
                }
                return x
            }
            el.sfl = function (c, f, s, l) {
                x({f: f, s: s, w: l});
                return x
            }
            el.fill = function () {
                el.context.fill()
                //el.stroke()
                return el
            }
            el.stroke = function () {
                el.context.stroke()
                //el.stroke()
                return el
            }
            el.closePath = function () {
                el.context.closePath()
                return el
            }
            el.beginPath = el.begin = function (x, y) {

                el.context.beginPath()

                if (N(x)) {
                    el.moveTo(x, y)
                }

                if (A(x)) {
                    el.moveTo(x[0], x[1])
                }

                return el
            }
            el.moveTo = function (x, y) {
                el.context.moveTo(x, y)
                return el
            }
            el.lineTo = function (x, y) {

                if (A(x)) {

                    _.e(arguments,
                        function (x) {
                            el.lineTo(x[0], x[1])
                        })
                }

                el.context.lineTo(x, y)
                return el
            }
            el.clip = function () {
                el.context.clip()
                return el
            }
            el.fillRect = el.fr = function (a, b, c, d) {
                a = a || 0
                b = b || 0
                c = c || el.W()
                d = d || el.H()

                el.context.fillRect(a, b, c, d)
                return this
            }


            //clear screen [+ fill with color || run fx]

            el.clear = el.clearRect = function (a, b, c, d) {
                if (S(a)) {
                    el.fillStyle(a);
                    return el.fillRect()
                }
                a = a || 0
                b = b || 0
                c = c || el.W()
                d = d || el.H()
                el.context.clearRect(a, b, c, d)

                // if(F(a)){a()}
                return el
            }

            el.horizontalLine = el.lnh = function (X, Y, l) {
                var g = G(arguments), X = g[0], Y = g[1], l = g[2],
                    X2 = g.p ? X + l : g.n ? X - l : l
                return x.ln(X, Y, X2, Y)
            }
            el.verticalLine = el.lnv = function (X, Y, len) {

                var g = G(arguments),

                    X = g[0],

                    Y = g[1],

                    len = g[2],

                    Y2 = g.p ? Y + len
                        : g.n ? Y - len
                        : len

                return x.ln(X, Y, X, Y2)
            }


            //curves
            el.arc = function (a, b, c, d, e, f, g) {
                el.context.arc(a, b, c, d, e, f, g)
                return el
            }
            el.arcTo = el.a2 = function a2(X) {
                var g = G(arguments)

                if (A(X)) {
                    return _a(a2(x), X)

                }

                this.arcTox([0] || 50, g[1] || 40, g[2] || 100, g[3] || 100, g[4] || 30)

                this.stroke()
                return this
            }
            el.bezierCurveTo = function (a, b, c, d, e, f, g) {
                this.context.quadraticCurveTo(a, b, c, d, e, f, g)
                return this
            }
            el.quadraticCurveTo = function (a, b, c, d, e, f, g) {


                this.context.quadraticCurveTo(a, b, c, d, e, f, g)


                return el
            }
            el.curveTo = function (a, b, c, d, e, f, g) {

                if (N(e)) {
                    return this.bezierCurveTo(a, b, c, d, e, f)
                }

                else return this.quadraticCurveTo(a, b, c, d, e, f, g)


            }

            el.cir = function (X, Y, R, fs, ss) {
                var g = G(arguments), X = g[0] || 200, Y = g[1] || 200, r = g[2] || 1, fs = g[3], ss = g[4]

                el.beginPath()
                el.arc(X, Y, r, 0, 7, false)

                el.fillColor(fs)
                el.strokeColor(ss)
                el.stroke().fill()

                return el

            }


            //rect
            el.fillRect = el.fr = function (a, b, c, d) {
                a = a || 0
                b = b || 0
                c = c || this.W()
                d = d || this.H()
                this.context.fillRect(a, b, c, d)

                return this
            }
            el.colorFillRect = el.cfr = function (a) {
                var args = G(arguments)
                this.save()
                this.fillStyle = a
                this.fillRect(0, 0, this.W(), this.H())
                this.restore()
                return this
            }
            el.roundRect = function (X, y, width, height, radius) {

                el = this.context
                el.beginPath()
                el.moveTo(X + radius, y);
                el.lineTo(X + width - radius, y);
                el.quadraticCurveTo(X + width, y, X + width, y + radius);
                el.lineTo(X + width, y + height - radius);
                el.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
                el.lineTo(X + radius, y + height);
                el.quadraticCurveTo(X, y + height, X, y + height - radius);
                el.lineTo(X, y + radius);
                el.quadraticCurveTo(X, y, X + radius, y);
                el.closePath();

                el.fill()
                return el
            }
            el.roundRect.test = function () {
                el.roundRect(100, 100, 200, 400, 20)
            }


            //draw line ( [x,y],[x,y] || x,y,x,y )
            //draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
            //fresh start
            el.ln = el.line = function rc(p) {

                var args = G(arguments), p = args[0]


                if (N(args[0])) {
                    el.begin(args[0], args[1])
                    el.lineTo(args[2], args[3])
                    el.stroke()
                    return el
                }


                if (A(args[0]) && N(args[0][0])) {

                    el.begin(args.f)

                    _.e(args.r, function (p) {
                        el.lineTo(p[0], p[1])
                    })

                    el.stroke()
                    return el
                }


                if (AA(p)) {

                    _.e(args,
                        function (p) {

                            el.line.apply(null, p)

                        })
                }


                el.stroke()
                return el
            }


            el.fitEx = function () {
                this.ln([0, 0], [this.W(), this.H()], [0, this.W()], [this.H(), 0])
            }


            el.sun = function (a, b, s) {
                s = s || 1;

                this.rG([[a || 0, b || a || 0],
                        s * 100, s * 500],

                    {'y': 0, 1: tCl('p', 0)},
                    600, 600)
            }
            el.ball = function (b) {
                b = b || {}
                var dir = b.d || false,
                    px = b.x || 100, py = b.y || 100, rad = b.r || 100,

                    per = b.p || Math.PI * 2,

                    ss = $r('c', b.s),
                    fs = $r('c', b.f),
                    lw = D(b.l) ? b.l : 4

                return x.com(
                    'b', ['a', px, py, rad, 0, per, dir],
                    {f: fs, s: ss, w: lw}, 'f', 's')
            }


            el.pointInPath = el.pip = function (c, a, b) {
                return this.context.isPointInPath(a, b)
            }
            el.paperBag = function (x, y, width, height, blowX, blowY) {

                x = x || 100
                y = y || 100
                width = width || 100
                height = height || 100
                blowX = blowX || 100
                blowY = blowY || 100
                var lx, ly;
                this.beginPath();
                this.moveTo(x, y);
                this.quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
                this.quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
                this.quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
                this.quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);

                return this
            }

            return el
        }
        function superCanvasEvents(el) {
            el.$ = function (func) {
                el.click(function (e) {

                    func(e.pageX - $(this).offset().left,
                        e.pageY - $(this).offset().top)

                })
            }
            el.$$ = function (func) {

                el.dblclick(function (e) {

                    func(e.pageX - $(this).offset().left,
                        e.pageY - $(this).offset().top)

                })
            }
            el.over = el.MV = function (func) {

                el.mouseover(function (e) {


                    func(e.pageX - $(this).offset().left,
                        e.pageY - $(this).offset().top)
                })
            }
            el.out = el.MO = function (func) {

                el.mouseout(function (e) {


                    func(e.pageX - $(this).offset().left,
                        e.pageY - $(this).offset().top)
                })
            }
            el.enter = el.ME = function (func) {

                el.mouseenter(function (e) {

                    func(e.pageX - $(this).offset().left,
                        e.pageY - $(this).offset().top)
                })
            }
            el.leave = el.ML = function (func) {

                el.mouseleave(function (e) {

                    func(e.pageX - $(this).offset().left,
                        e.pageY - $(this).offset().top)
                })
            }
            el.up = el.MU = function (func) {

                el.mouseup(function (e) {

                    func(e.pageX - $(this).offset().left,
                        e.pageY - $(this).offset().top)
                })
            }
            el.move = el.MM = function (func) {

                el.mousemove(function (e) {

                    func(e.pageX - $(this).offset().left,
                        e.pageY - $(this).offset().top)
                })
            }
            el.down = el.MD = function (func) {

                el.mousedown(function (e) {

                    func(e.pageX - $(this).offset().left,
                        e.pageY - $(this).offset().top)
                })
            }
        }
        function superCanvasShadow(el) {
            el.shadowColor = function (color) {

                if (U(color)) {
                    return this.context.shadowColor
                }


                this.context.shadowColor = oO('c', color)

                return this
            }
            el.shadowBlur = function (blurNumber) {

                if (U(blurNumber)) {
                    return this.context.shadowBlur
                }

                this.context.shadowBlur = blurNumber
                return this
            }
            el.shadowOffsetX = function (offsetX) {
                if (U(offsetX)) {
                    return this.context.shadowOffsetX
                }
                this.context.shadowOffsetX = offsetX
                return this
            }
            el.shadowOffsetY = function (offsetY) {
                if (U(offsetY)) {
                    return this.context.shadowOffsetY
                }
                this.context.shadowOffsetY = offsetY
                return this
            }
            el.shadow = function (color, x, y, num) {

                el.shadowColor(color)

                el.shadowOffsetX(x).shadowOffsetY(y)

                el.shadowBlur(num)

                return el
            }
        }
        return el
    }
    superCanvas = function(el){
        el = $(el)

        //to be called internally by $.c //works on FIRST canvas in jquery obj
        el.canvas = el[0]

        el.context = el.canvas.getContext('2d')
        el.stage = new cjs.Stage(el.canvas) ///////////////////////////////

        _superCanvas(el)
        return el
    }
    $.c=$.can=function(c, width, h, x,y){var g=G(arguments), o, el

        o = g.S_?
        {c: g.f, w: g.s, h: g.t, x:g[3], y:g[4]}:
        {w: g.f, h: g.s, x: g.t, y: g[3] }
        o.w = o.w|| 1200
        o.h = o.h|| 600
        o.c = o.c || 'x'
        el = $('<canvas>')
        el.attr({width: o.w, height: o.h})
        el.C(o.c)
        if(N(o.x)){ el.abs(o.x, o.y) }
        if(g.p){el.drag()}
        el.A().al(.8)
        return superCanvas(el)
    }
    $.fn.cv=$.fn.can=function(){
        var c=  $.can.apply($, G(arguments))
        this.A(c)
        return this
    }
    $.fn.Cv=$.fn.Can=function(){

        var c
        c=  $.c.apply($, G(arguments))
        this.A(c)
        return c
    }
    $.fn.ctx = function () {return this[0].getContext('2d')}
    _.px = function (a) {
        return _.nN(a) ? a + 'px' : a
    }
    S.url = function (a) {
        return 'url("' + a + '")'
    }
    _.iDU = function (a) {
        return s$(a).contains('data:')
    }
    _.crs = crs = function (a) {//Graphics.fromSource =
        //it's the opposite of 'src' !
//it strips '/me.png' -> 'me'
//why would i need this?
        return a.split('/').pop().split('.png')[0]
    }

    $.iI=function(i){

        if(O(i)){
            return S($(i)[0].src)
        }
    }

    _src=function(a){ a = _.ext(a);
        return s$(a).startsWith('/')? a : '/'+ a
    }
    _.src =    function f(e){

        //if(Q(e)){$l('q');e=$(e)[0]}
        if( e.image ){ e=e.image}
        if( C(e) ){ e = C(e) }
        if( e.src ){ e = e.src}
        if( e.toDataURL ){  e=tDU(e) }
        return s$(e).contains('data:')?  e
            :  S(e) ?  _src(e)
            : 0
    }
    $.i= $.img=function(srce, fn){var g=G(arguments), o,i;
        $.im = function(img, func){
            i = $.img().src(img);
            func(i[0]);
            //s$(e).contains('data:')
            return i}
        o= F(g[0])? {fn:g[0]}: {src:g[0], fn:g[1]};
        i = $( new Image() );
        i.i=function(src){
            if(U(src)){return this[0].src}
            this.src(_.src(src));
            return this
        }
        i.r=function(fn){
            this.load(function(e){
                fn(e, i)
            })
            return this
        }
        i.r(function(_i){i._=_i.target})
        if(o.fn){i.r(o.fn)} //i.l(function(e){o.fn($(e.target), e)})
        if(o.src){i.i(o.src)}
        //i.A()
        return i
    }


//gets rid of auto-scaling quirk
    /*
     i.i=i.l=i.load(function(i){
     i._ =i[0]
     //i = $(i.target)
     // img.W( img.W() )
     // img.H( img.H() )
     })*/
    $.fn.bg = $.fn.bgI = function (url) {//set background image
        this.bgI('url("' + Y.src(url) + '")');
        return this
    }
    $.fn.src= function(a){
        if( U(a) ){return this.attr('src')}

        this.attr('src', _.src(a) )

        return this
    }
    ctx()
    function ctx(){
        x=ctx= CanvasRenderingContext2D.prototype
        xGr = CanvasGradient.prototype
        x.linGrad=function(a,b,c,d){
            return this.createLinearGradient(a,b,c,d)

        }
        x.radGrad=function(a,b,c,d,e,f){
            return this.createRadialGradient(a,b,c,d,e,f)

        }
        x.f =function(fs){

            this.fillStyle = fs
            return this}
        x.temp=function(func){var x=this

            func = _.bind(func, x)

            this.save()

            func()

            this.restore()

            return this}
        x.H=function(){
            return this.canvas.height
        }
        x.W=function(){
            return this.canvas.width
        }
        x.trans=function(){
            this.translate.apply(this, arguments)
            return this}
        x.Z=function(){
            this.scale.apply(this, arguments)
            return this}
        x.tick=function(func){var x=this

            cjs.tick(function(){

                x.temp(func)
            })


            return this}
        x.beg=function(){this.beginPath()
            return this
        }
        x.mt=function(x,y){this.moveTo(x,y);return this}
        x.lt=function(x,y){this.lineTo(x,y);return this}
        x.ss = function(c){ this.strokeStyle =  oO('c', c); return this}
        x.fs = function(c){  this.fillStyle =  oO('c', c); return this}
        x.drawPoly=function(vs,sc,hole,ox,oy){
            ox=N(ox)?ox:0; oy=N(oy)?oy:0

            var x=this,
                i

            x.beg().mt(vs[0][0]+ox, vs[0][1]+oy)

            for(i=1; i<vs.length; i++){
                x.lt(vs[i][0]+ox,
                    vs[i][1]+oy)}

            x.lineWidth = 2

            x.ss(sc||'b').fs( (hole==true)?'w':'p' )
            x.closePath()
            x.stroke()
            x.fill()
            return this}
        x.drawPolys=function(poly,sc,ox,oy){var x=this
            //if more than one poly produced, use multiple color to display
            var num=poly.getNumInnerPoly()
            _.times(num, function(i){ if(i!=0){ sc=['red','green','blue','yellow'][i%num] }

                var p  = poly.getInnerPoly(i)

                x.drawPoly(p.verts(), sc, p.isHole(), ox, oy)

            })
            return this}
        x.S= function(){this.save();return this}
        x.R= function(){this.restore();return this}
        x.c= x.fs  =function(c,C,l){
            this.fillStyle = oO('c', c)
            if(C){this.C(C)}
            if(N(l)){this.l(l)}
            return this
        }
        x.C= x.ss =  function(){var g=G(arguments),o
            o= g.N_? {l: g.f}: {C: g.f, l: g.s}
            if(o.C){this.strokeStyle = oO('c', o.C)}
            if(N(o.l)){this.l(o.l)}
            return this
        }
        x.f= function(){
            var g=G(arguments)
            this.fill();
            if(g.p){this.s()}
            return this
        }
        x.s=  function(){this.stroke();return this}
        x.al= function(al){this.globalAlpha=al;return this}
        x.o= x.op = x.cO=function(o){this.globalCompositeOperation=o; return this}
        x.b=  function(){var g=G(arguments)
            this.beginPath()
            if(g.u){ return this }
            if(g.N_){
                this.mt(g.f, g.s)
                if(g.t){this.c(g.t,g[3],g[4])}
            }
            else { this.c.apply(this, g)  }
            return this
        }
        x.mt= function(){var x=this, g=G(arguments)
            if(g.A_){
                x.mt(g.f[0], g.f[1])
                g.eR(function(pt){ x.lt(pt[0], pt[1]) })
            }

            else {
                x.moveTo( N(g.f, 0), N(g.s,0) )

                if(N(g.t)){ x.lt(g.t,g[3]) }
            }

            return g.n? x.s(): g.p? x.f(): g.m? x.D(): x
        }
        x.a= function(){var g=G(arguments),x=this,
            o = N(g.s)? { x:g.f, y:g.s, r:g.t, rt1:  g[3], rt2:  g[4] }:
            {r: g.f}
            o.x=N(o.x, 0)
            o.y=N(o.y, 0)
            o.r  = N(o.r, 50)
            o.rt1=N(o.rt1, 0)
            o.rt2= N(o.rt2, 360)
            o.ccw = g.n? true : false
            this.arc(o.x, o.y, o.r, M.tR(o.rt1), M.tR(o.rt2), o.ccw)
            return  g.n? x.s(): g.p? x.f(): g.m? x.D(): x
        }
        x.at= function(){var g=G(arguments),o
            o={x1: g.f,  y1: g.s, x2: g.t,  y2: g[3], r: g[4]}
            this.arcTo( o.x1, o.y1, o.x2, o.y2, o.r )
            return  g.n? x.s(): g.p? x.f(): g.m? x.D(): x
        }
        x.l=  x.lW=function(n){var g=G(arguments)
            if(g.N){ this.lineWidth = n; return this }
            return this.lt(g.f, g.s).s()
        }
        x.lC=  function(n){var g=G(arguments); if(g.N){ this.lineCap = n; return this }}
        x.lJ=  function(n){var g=G(arguments); if(g.N){ this.lineJoin = n; return this }}
        x.x= x.cp=function(){this.closePath();return this}
        x.cl=  function(){this.clip(); return this}
        x.qt=  function(){this.quadraticCurveTo(); return this}
        x.iP=  function(x,y){return this.isPointInPath(x,y)}
        x.fr= x.fR=function(x,y,w,h){var g=G(arguments),o
            o= N(g.t)?
            {x: g.f, y: g.s, w: g.t, h:g[3]}:
            {w:g.f, h:g.s}
            o.x = N(o.x, 0)
            o.y = N(o.y, 0)
            o.w = N(o.w, this.W())
            o.h = N(o.h, this.H())
            this.fillRect(o.x, o.y, o.w, o.h)
            return this
        }
        x.sR=  x.sr=function(){}
        x.xR=  function(){this.clearRect();return this}
        x.r=  function(){}
        x.H=  function(){return this.canvas.height}
        x.W=  function(){return this.canvas.width}
        x.t= function(fn){var x=this; T.t(function(){x.temp(fn)}); return this}
        x.cv=  function(){return this.canvas}
        x._=  x.temp=function(fn){this.S(); _.b(fn,this)(); return this.R()}
        x.u=  function(){return  this.cv().toDataURL() }
        x.$=function(){return $(this.cv())}
        x.D=function(){return this.s().f()}
        x.lt= function(){var g=G(arguments),x=this
            if(g.A_ && A(g.f[0])){x.lt.apply(x, g.f)}
            else if(O(g.s)){g.e(function(pt){x.lt(pt[0], pt[1])})}
            else{x.lineTo(g.f, g.s)}
            return g.n? x.s(): g.p? x.f(): g.m? x.D(): x} //x.$=function(){return this.s().f() }
        comp=function(){
            x.Ds= x.dO=function(){this.o('destination-out'); return this}
            x.dS= x.dI=function(){return this.o('destination-in')}
            x.sD= x.sI=function(){this.o('source-in'); return this }
            x.Sd= x.sO=function(){this.o('source-out'); return this } // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
            x.ds= x.dV= function(){ this.o('destination-over'); return this }
            x.SD= x.sT= x.sA= function(){ this.o('source-atop'); return this }
            x.DS= x.dT= x.dA= function(){ this.o('destination-atop'); return this }
            x.li=function(){ this.o('lighter'); return this }
            x.co=function(){ this.o('copy'); return this }
            x.xo=function(){ this.o('xor'); return this }
        }; comp()
        tran=function(){
            x.tl=  x.trans=function(tX,tY,rt,sX,sY){
                this.translate(tX,tY)
                if(N(rt)){this.rt(rt)}
                if(N(sX)){this.sc(sX,sY)}
                return this
            }
            x.sc= function(x,y){

                y=N(y,x)

                this.scale(x,y);
                return this

            }
            x.rt=function(n){this.rotate(M.tR(n)); return this}
            x.tf=function(){}
            x.sTf=function(){}
        }; tran()
        pix=function(){
            x.cD=function(){
                this.createImageData()
                return this }
            x.gD=function(){  var g=G(arguments), o, d
                o={ x: g.f, y: g.s, w: g.t, h:g[3] }
                o.x= N(o.x, 0)
                o.y = N(o.y, 0)
                o.w= N(o.w, this.W())
                o.h = N(o.h, this.H())
                d = this.getImageData(o.x, o.y, o.w, o.h)
                d.h = d.height
                d.w = d.width
                d.d = d.data
                return d
            }
            x.pD=function(d,x,y){
                this.putImageData(d,N(x,0),N(y,0))
                return this
            }
        }; pix()
        grad=function(){
            x.lg=function(){var ctx=this, g=G(arguments), o, gr
                o = g.O? g.f: N(g.t)? {x1: g.f, y1: g.s, x2: g.t, y2: g[3]} : {x2: g.f, y2: g.s}
                o.x1 = N(o.x1, 0)
                o.y1 = N(o.y1, 0)
                o.x2 = N(o.x2, 0)
                o.y2 = N(o.y2, 0)

                gr= ctx.createLinearGradient(o.x1, o.y1, o.x2, o.y2)

                if(o.cS){
                    gr.cS(o.cS)

                    ctx.c(gr);return ctx
                }

                return gr
            }
            gr = CanvasGradient.prototype
            gr.cS= gr.s = gr.c= function(n, c){var g=G(arguments), gr=this
                if(g.O){_.e(g.f, function(n, c){ gr.cS(n,c)})}
                else { this.addColorStop(n, oO('c',c)) }
                return this
            }
            x.lf= x.lG= ctx.lGr= ctx.linGrad=function(a,b,c,d){return this.createLinearGradient(a,b,c,d)}
            x.rf= x.rG= ctx.rGr= ctx.radGrad=function(a,b,c,d,e,f){return this.createRadialGradient(a,b,c,d,e,f)}
            x.pt= x.Pt=function(){return this.createPattern()}
        }; grad()
        text = function(){
            x.F=function(){var g=G(arguments), o
                o = {f: g.f}
                if(g.N_){o.f += 'px ' + (g.n?'Verdana':'Georgia')}
                this.font = o.f
                return this
            }
            x.tA=function(){}
            x.tB= x.Bl= function(){}
            x.ft= x.fT=function(x,y,t){ var g=G(arguments)

                if(g.N_){
                    this.fillText(g.t, g.f, g.s)
                }

                else {
                    this.fillText(g.t, x.W()/2, 200)
                }
            }
            x.sT=function(){}
            x.mT=function(){}
            x.mL=function(){} //x.T( ['r'],  [20 | '20px verdana], 'afsdsafd', [x, y] )
            x.T=function(){var g=G(arguments),x=this, o,t
                o = g.S? {t: g.f, x: g.t, y:g[3]} : // ONLY a str (so not to be confused with color)
                    S(g.t) ? {c:g.f, f:g.s, t: g.t, x:g[3], y:g[4] }  :
                        g.N_? {f:g.f, t: g.s, x: g.t, y:g[3] } :
                            S(g.s)?   { c:g.f, t: g.s, x: g.t, y:g[3] }:
                            {t:g.f,x:g.s,y:g.t}
                o.x= N(o.x, x.W()/2)
                o.y=N(o.y, 200)
                if(o.c){x.c(o.c, o.c)}
                if(o.f){g.n? x.F(  o.f ,'-' ): x.F(  o.f  )}
                x.fillText(o.t, o.x, o.y)
                return x}
        }; text()
        draw=function(){
            x._d=function(i){
                var  g=G(arguments),o
                if(g.S_  && g.f.length < 10000 ){g[0] = Q.i(g[0])}

                if(g[0]==this){ g[0] = g[0].cv()  }
                g[1] = N(g[1],0)
                g[2] = N(g[2],0)

                this.drawImage.apply(this, g)
                return this}
            x.d=function(i,x,y){var g=G(arguments),o

                o = {i: g.f, x: g.s, y: g.t }


                o.x=N(o.x,0)
                o.y=N(o.y,0)
                if(O(o.i)){
                    this.drawImage( $(o.i)[0], o.x, o.y)
                    return this
                }

                if(S(o.i)){o.i = Q.i(o.i)}

                if(o.i.width){
                    o.x =  o.x - o.i.width/2
                    o.y =  o.y - o.i.height/2
                }
                this._d(o.i, o.x, o.y)
            }
            x.scICen=function(i, s, x, y ){
                if(S(i) && i.length < 100){i = Q.i(i)}
                x=N(x,0)
                y=N(y,0)
                var  w= this.W(), h= this.H(),
                    s= s||1
                this.d(i,
                    w*s/-2+w/2, h*s/-2+h/2, w*s, h*s
                )
            }
            x.scaleImCenSpiralMe=function(){
                var scaleNum = 1,
                    that =this
                _.t(100, function(){

                    that.scaleImCen('me', scaleNum)
                    scaleNum *= .9
                })
            }
            x.scaleImCenSpiral=function(){
                var scaleNum = 1, that =this
                _.t(100, function(){
                    that.scaleImCen('me', scaleNum)
                    scaleNum *= .9
                })

            }
            x.dC=function f(i,x,y){

                var that = this

                i = i||'me'
                x= x||100
                y=y||100


                if(U(x)){//draw img in center of can
                    $.img(i,function(i){
                        that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})}

                else {//draw it by specifying location of its center
                    y=y||x
                    $.i(i, function (i) {
                        that.dr(i, x - i.W() / 2, y - i.H() / 2)})}

                return this} //draw it where u say, but as if its reg point was its center
            x.drawRegCenter=  function f(i,x,y){var that =this

                $.i(i,function(i){
                    that.draw(i, (that.W()/2)-(i.W()/2), (that.H()/2)-(i.H()/2))})
                return this}
            x.Cd=function(i, x,y){var ctx = this
                x= N(x,100)
                y= N(y,100)
                i = Q.i(i || 'me')
                ctx.d( i, x- i.W()/2, y-i.H()/2)
                return ctx
            }
            x.fit=function f(i, x,y) {
                i= i || 'me'
                x = N(x,0)
                y = N(y,0)
                this.d(i, x, y, this.W(), this.H())
                return cv
            }
            x.cr=function (x1,y1,x2,y2){var cv=this, ctx=cv.ctx(),i
                i= this.u()
                if(A(x1)){
                    return this.crop(
                        x1[0], x1[1], x1[2]-x1[0], x1[3]-x1[1]
                    )
                }
                this.d(i, x1, y1, x2,y2, 0,0, cv.W(), cv.H())
                return cv
            }
        };draw()


    }
}