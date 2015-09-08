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

    this.attr('src', _.src(a))

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

    this.attr('src', _.src(a) )

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
rel();addRm();disp(); valu(); color(); klass(); outer(); style(); atts(); background();
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

        this.attr('src', _.src(a))

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

        this.attr('src', _.src(a) )

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
        this.bgI('url("' + _.src(url) + '")');
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





$.fn.T0 = function () {
    var d = this,
        g = G(arguments)
    d.E()
    g.e(function (str) {
        d.A($.h3(str))
    })
    return d
}
$.fn.T= function(){var g=G(arguments)
    this.text.apply(this,g)
    return this
}
$.fn.fS= function(z){
    this.css('font-size', z)
    return this}
$.fn.tA=  function(z){
    this.css('text-align', z)
    return this}
