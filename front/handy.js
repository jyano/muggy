objects()
xml()
jqfn()
evenz()
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
    $r = function (a, b) {
        a = a || 'c'; //cannot be 'color' ?? only abr??
        var values = _.values(oO(a))
        return Oo(a, b) || values[_.random(_.size(values) - 1)]
    }
}//
function xml() {
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
    }//
}
function jqfn() {
        $.fn.fi = $.fn.find
        $.fn.ch = function () {
            return this.children()
        }
        $.fn.pa = $.fn.parent
        $.fn.sib = function () {
            var g = G(arguments);
            return this.sib.apply(this.g)
        }
        $.fn.hd = $.fn.hide
        $.fn.sh = $.fn.show
        $.fn.rm = $.fn.xx = function () {
            var e = this
            e.remove()
            return e
        }
        $.fn.E = function (html) {
            this.empty();
            this.html(html);
            return this
        }
        $.fn.A = function (stuff) {
            if (U(stuff)) {
                $('body').append(this);
                return this
            }
            this.append.apply(this, arguments)
            return this
        }
        $.fn.a2 = $.fn.ap2 = function (a) {
            a.A(this);
            return this
        }
        $.fn.iA = $.fn.insertAfter
        $.fn.pp = function (a) {
            this.pp(a);
            return this
        }
        $.fn.pp2 = function (a) {
            this.prependTo(a);
            return this
        }
        $.fn.e = $.fn.each
        $.fn.N = $.fn.next
        $.fn.tt = $.fn.tit = $.fn.title = function (t, c) {
            var p
            p = $.p(t).fS(24).K('text-center').C('X', c || 'z').mH(10).pH(30)
            this.A(p, $.hr().fS(10))
            return this
        }
        $.fn.gg = $.fn.toggle
        $.fn.h = $.fn.ht = $.fn.html
        $.fn.oh = function () {
            return this[0].outerHTML
        }
        $.fn.mlt = function (m) {
            return this.at('multiple', true)
        }
        $.fn.ph = $.fn.placeholder = function (forWhat) {
            return this.attr('placeholder', forWhat)
        }
        $.fn.chk = function () {
            this.at('checked', true)
        }
        $.fn.at = $.fn.attr
        $.fn.ty = $.fn.type = function (type) {
            if (U(type)) {
                return this.attr('type')
            }
            this.attr('type', type);
            return this
        }
        $.fn.id = function (id) {
            if (U(id)) {
                return this.attr('id')
            }
            ;
            this.attr('id', id);
            return this
        }
        $.fn.n = $.fn.name = function (name) {
            if (U(name)) {
                return this.attr('name')
            }
            ;
            this.attr('name', name);
            return this
        }
        $.fn.hf = $.fn.href = function (href) {
            if (U(href)) {
                return this.attr('href')
            }
            this.attr('href', href);
            return this
        }
        $.fn.for = $.fn.fr = function (forWhat) {
            return this.attr('for', forWhat)
        }
        $.fn.role = function (role) {
            if (U(role)) {
                return this.attr('role')
            }
            this.attr('role', role)
            return this

        }
        $.fn.v = function (v) {
            var g = G(arguments), v

            if (D(v)) {
                this.val(v)

                return this
            }
            v = this.val()
            if (!g.p) {
                this.val('')
            }
            return v

        }
        $.fn.V = function () {
            var v = this.val()
            this.val('')
            return v
        }
    }

$.rulers = function () {
    $.d('b', 100, 100).al(.3).dg()
    $.d('r', 100, 300).al(.3).dg()
}
$.dg = $.dragFrame = function (d) {
    var oD
    oD = $.d('y').pad(20).drag()
    d = d || $.d('r').mar(20)
    d.xPrp().a2(oD)
    d.oD = oD
    oD.XY(40, 40)
    return oD
}
_z=function z(a,b,c){return U(b)?_.size(a)
    :N(b)?_z(a)==b
    :_z(a)==_z(b)}
z = function (fn) {
    var g = G(arguments)
    if (g.F_) {
        return T.t(fn)
    }
    $('body').empty()
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

function evenz(){
    KEYOB = keyObj = {

        up: 38, u: 38,
        down: 40, d: 40,
        left: 37, l: 37,
        right: 39, r: 39,
        space: 32, s: 32,
        enter: 13, e: 13
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
    $.tap=function(func){this('body').on('keydown mousedown', func); return this}
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
        return this
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

}