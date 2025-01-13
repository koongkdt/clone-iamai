(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    632: (e, t, i) => {
        Promise.resolve().then(i.bind(i, 8283))
    }
    ,
    8283: (e, t, i) => {
        "use strict";
        i.d(t, {
            default: () => X
        });
        var a = i(5155)
          , n = i(2115);
        let s = ["#0f0", "#0f0", "#0f0", "#0f0", "#0f0", "#0f0", "#0f0"]
          , o = () => {
            let e = (0,
            n.useRef)(null)
              , [t,i] = (0,
            n.useState)(!1);
            return (0,
            n.useEffect)( () => {
                let e = () => {
                    i(window.scrollY > .5 * window.innerHeight)
                }
                ;
                return window.addEventListener("scroll", e),
                e(),
                () => window.removeEventListener("scroll", e)
            }
            , []),
            (0,
            n.useEffect)( () => {
                let i = e.current;
                if (!i)
                    return;
                let a = i.getContext("2d");
                if (!a)
                    return;
                let n = () => {
                    i.width = window.innerWidth,
                    i.height = window.innerHeight
                }
                ;
                n(),
                window.addEventListener("resize", n);
                let o = "日月水木金土天地人子母父ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
                  , r = i.width / 16
                  , l = [];
                for (let e = 0; e < r; e++)
                    l[e] = Math.random() * i.height / 16;
                let m = e => {
                    if (!t)
                        return "#0F0";
                    if (e > .8 * i.height) {
                        let e = s[Math.floor(Math.random() * s.length)];
                        return "".concat(e, "BF")
                    }
                    return "#0F0"
                }
                  , c = setInterval( () => {
                    a.fillStyle = "rgba(0, 0, 0, 0.05)",
                    a.fillRect(0, 0, i.width, i.height);
                    for (let e = 0; e < l.length; e++) {
                        let t = o[Math.floor(Math.random() * o.length)]
                          , n = 16 * l[e];
                        a.fillStyle = m(n),
                        a.font = "".concat(16, "px monospace"),
                        a.fillText(t, 16 * e, n),
                        n > i.height && Math.random() > .975 && (l[e] = 0),
                        l[e] += .5 * Math.random() + .5
                    }
                }
                , 33);
                return () => {
                    clearInterval(c),
                    window.removeEventListener("resize", n)
                }
            }
            , [t]),
            (0,
            a.jsx)("canvas", {
                ref: e,
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: -1
                }
            })
        }
        ;
        var r = i(5565)
          , l = i(7438)
          , m = i.n(l)
          , c = i(3022)
          , d = i.n(c)
          , _ = i(2959);
        let u = [{}]
          , p = () => {
            let[e,t] = (0,
            n.useState)(!1)
              , [i,s] = (0,
            n.useState)(0)
              , [o,r] = (0,
            n.useState)(!1)
              , l = (0,
            n.useRef)(null)
              , {activePlayer: m, setActivePlayer: c} = (0,
            _.G)()
              , p = (0,
            n.useRef)(!1);
            (0,
            n.useEffect)( () => {
                l.current && (l.current.volume = .5);
                let e = () => {
                    !p.current && l.current && (p.current = !0,
                    l.current.play().then( () => {
                        t(!0),
                        c("player1")
                    }
                    ).catch(console.error))
                }
                ;
                return document.addEventListener("click", e, {
                    once: !0
                }),
                () => document.removeEventListener("click", e)
            }
            , [c]),
            (0,
            n.useEffect)( () => {
                if ("player1" !== m && e) {
                    var i;
                    t(!1),
                    null === (i = l.current) || void 0 === i || i.pause()
                }
            }
            , [m, e]),
            (0,
            n.useEffect)( () => {
                l.current && (l.current.volume = o ? 0 : .5)
            }
            , [o]),
            (0,
            n.useEffect)( () => {
                if (l.current) {
                    if (e) {
                        let e = l.current.play();
                        void 0 !== e && e.catch(e => {
                            console.log("Playback prevented:", e),
                            t(!1),
                            c(null)
                        }
                        )
                    } else
                        l.current.pause()
                }
            }
            , [e, i, c]);
            let h = () => {
                s(e => (e + 1) % u.length)
            }
              , g = () => {
                u[i].spotify && window.open(u[i].spotify, "_blank")
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: d().player,
                children: [(0,
                a.jsx)("audio", {
                    ref: l,
                    src: u[i].file,
                    onEnded: h
                }), (0,
                a.jsxs)("div", {
                    className: d().controls,
                    children: []
                }), (0,
                a.jsx)("div", {
                    className: d().songInfo,
                    children: (0,
                    a.jsx)("div", {
                        onClick: g,
                        style: {
                            cursor: "pointer"
                        },
                        className: d().songTitle,
                        children: u[i].title
                    })
                })]
            })
        }
        ;
        var h = i(4551)
          , g = i.n(h);
        let f = e => {
            let {address: t} = e
              , [i,s] = (0,
            n.useState)(!1)
              , o = async () => {
                await navigator.clipboard.writeText(t),
                s(!0),
                setTimeout( () => s(!1), 2e3)
            }
            ;
            return (0,
            a.jsx)("button", {
                onClick: o,
                className: g().copyButton,
                children: i ? "Copied!" : t
            })
        }
        ;
        var w = i(9394)
          , x = i.n(w);
        let v = e => {
            let {text: t, className: i=""} = e
              , [s,o] = (0,
            n.useState)(!0);
            return (0,
            n.useEffect)( () => {
                let e = setInterval( () => {
                    .1 > Math.random() && (o(!1),
                    setTimeout( () => o(!0), 100 * Math.random()))
                }
                , 50);
                return () => clearInterval(e)
            }
            , []),
            (0,
            a.jsx)("h1", {
                className: "".concat(x().glitch, " ").concat(i, " ").concat(s ? "" : x().hidden),
                "data-text": t,
                children: t
            })
        }
          , T = () => (0,
        a.jsx)("div", {
            className: m().terminalWrapper,
            children: (0,
            a.jsxs)("div", {
                className: m().terminal,
                children: [(0,
                a.jsxs)("div", {
                    className: m().titleBar,
                    children: [(0,
                    a.jsxs)("div", {
                        className: m().windowControls,
                        children: [(0,
                        a.jsx)("span", {
                            className: m().windowButton
                        }), (0,
                        a.jsx)("span", {
                            className: m().windowButton
                        }), (0,
                        a.jsx)("span", {
                            className: m().windowButton
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: m().windowTitle,
                        children: "AikoAI Terminal"
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: m().content,
                    children: [(0,
                    a.jsx)("div", {
                        className: m().musicPlayerWrapper
                    }), (0,
                    a.jsxs)("div", {
                        className: m().contentInner,
                        children: [(0,
                        a.jsx)(p, {}), (0,
                        a.jsx)(v, {
                            text: "AikoAI",
                            className: m().title
                        }), (0,
                        a.jsx)("div", {
                            className: m().address,
                            children: (0,
                            a.jsx)(f, {
                                address: "7akZTdpWNHUg4TaTEWoLKRMAmaph2RBBXr1hTXkdpump"
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: m().socialIcons,
                            children: [{
                                name: "Twitter",
                                icon: "images/x.svg",
                                url: "https://x.com/AikoAI_Solana",
                                isImage: !1
                            }, {
                                name: "DexScreener",
                                icon: "images/dexscreener.svg",
                                url: "https://dexscreener.com",
                                isImage: !1
                            }, {
                                name: "Telegram",
                                icon: "images/telegram.png",
                                url: "https://t.me/AikoAI_Solana",
                                isImage: !1
                            }, {
                                name: "Pumpfun",
                                icon: "images/Pump_fun_logo.png",
                                url: "https://pump.fun/coin/7akZTdpWNHUg4TaTEWoLKRMAmaph2RBBXr1hTXkdpump",
                                isImage: !1
                            }].map(e => (0,
                            a.jsx)("a", {
                                href: e.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: m().socialIcon,
                                "aria-label": e.name,
                                children: (0,
                                a.jsx)(r.default, {
                                    src: e.icon,
                                    alt: e.name,
                                    width: 24,
                                    height: 24,
                                    className: e.isImage ? m().iconImage : m().iconSvg
                                })
                            }, e.name))
                        }), (0,
                        a.jsxs)]
                    })]
                }), (0,
                a.jsx)("div", {
                    className: m().statusBar,
                    children: (0,
                    a.jsx)("span", {
                        children: "Connected to Base Mainnet"
                    })
                })]
            })
        });
        var y = i(9810)
          , j = i.n(y)
          , I = i(3316)
          , b = i.n(I)
          , k = i(272)
          , N = i.n(k)
          , C = i(673)
          , S = i.n(C);
        let A = e => {
            let {data: t, includes: i} = e
              , n = i.users[0];
            return (0,
            a.jsxs)("div", {
                className: S().tweetCard,
                onClick: () => {
                    window.open("https://x.com/".concat(n.username, "/status/").concat(t.id), "_blank")
                }
                ,
                children: [(0,
                a.jsxs)("div", {
                    className: S().tweetHeader,
                    children: [(0,
                    a.jsxs)("div", {
                        className: S().userInfo,
                        children: [(0,
                        a.jsx)("div", {
                            className: S().avatarContainer,
                            children: n.profile_image_url ? (0,
                            a.jsx)(r.default, {
                                src: n.profile_image_url,
                                alt: n.name,
                                width: 48,
                                height: 48,
                                className: S().avatar
                            }) : (0,
                            a.jsx)("div", {
                                className: S().defaultAvatar
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: S().userMeta,
                            children: [(0,
                            a.jsx)("span", {
                                className: S().name,
                                children: n.name
                            }), (0,
                            a.jsxs)("span", {
                                className: S().username,
                                children: ["@", n.username]
                            })]
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: S().date,
                        children: new Date(t.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        })
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: S().tweetContent,
                    children: [(e => e.split("\\n").map( (t, i) => (0,
                    a.jsxs)("span", {
                        children: [t, i < e.split("\\n").length - 1 && (0,
                        a.jsx)("br", {})]
                    }, i)))(t.text), t.media && (0,
                    a.jsx)("div", {
                        className: S().mediaContainer,
                        children: (0,
                        a.jsx)(r.default, {
                            src: t.media.url,
                            alt: "Tweet media",
                            width: 500,
                            height: 300,
                            className: S().media
                        })
                    })]
                })]
            })
        }
          , F = JSON.parse('[{"data":{"edit_history_tweet_ids":["1563886306723340288"],"text":"@dvcoolster @AikoAI_wtf @beeple Also got mine!!\\\\nAnd so happy with it!","author_id":"768153121","id":"1563886306723340288","created_at":"2022-08-28T13:48:45.000Z"},"includes":{"users":[{"name":"Rui Souto","username":"OtuosRui","profile_image_url":"https://pbs.twimg.com/profile_images/1852802410810675200/gPF-6djP_normal.jpg","id":"768153121"}]}},{"data":{"created_at":"2022-08-28T13:29:32.000Z","author_id":"1490409890325671945","id":"1563881468895576065","text":"@AikoAI_intern @AikoAI_wtf @IOl0o9C0za3ImKi @onebitecorn @Kelvo2828 @lianyouoffice @BabyMaxChillax @ia_polly @themeiquer @McSlither @a7plastic @kyoshao @adal27069 @agamarham14 @so0ps @zysss78437142 @DarkAngel1984_ @Screek83 Thanks for the reminder. \\\\nI love the Art! it\'s looking so great :)","edit_history_tweet_ids":["1563881468895576065"]},"includes":{"users":[{"username":"ladydevil84","id":"1490409890325671945","profile_image_url":"https://pbs.twimg.com/profile_images/1589355734080360449/7kylxT5Y_normal.jpg","name":"LadyDevil"}]}},{"data":{"edit_history_tweet_ids":["1563859449315577856"],"created_at":"2022-08-28T12:02:02.000Z","text":"It\'s on! I AM #1. https://t.co/0010jbo9RP","id":"1563859449315577856","author_id":"1217493454076424192"},"includes":{"users":[{"profile_image_url":"https://pbs.twimg.com/profile_images/1656992226491387904/LgjzNnRj_normal.jpg","id":"1217493454076424192","name":"HasslΞ FrΞΞ ⟠ \uD83C\uDF4C","username":"HassleFree19"}]}},{"data":{"created_at":"2022-08-25T05:14:22.000Z","author_id":"574712615","id":"1562669693294370816","edit_history_tweet_ids":["1562669693294370816"],"text":"@AikoAI_wtf @AikoAI_intern Ohhhhh, I like this one!","media":{"url":"https://pbs.twimg.com/media/FZzuvn7UEAUo4yt?format=jpg&name=small"}},"includes":{"users":[{"username":"Kristen_Colwell","id":"574712615","name":"Azuki 3593 - Midori ⛩️","profile_image_url":"https://pbs.twimg.com/profile_images/1746576539570049024/x7tHlxiY_normal.jpg"}]}},{"data":{"edit_history_tweet_ids":["1562677717744594946"],"id":"1562677717744594946","author_id":"3244415634","text":"@negrolarompe @AikoAI_wtf I keep forgetting to grab mine!","created_at":"2022-08-25T05:46:15.000Z"},"includes":{"users":[{"name":"Punk 4762","id":"3244415634","username":"punk4762","profile_image_url":"https://pbs.twimg.com/profile_images/1865924301527904256/2uuTCe5n_400x400.jpg"}]}},{"data":{"edit_history_tweet_ids":["1562606339763113986"],"created_at":"2022-08-25T01:02:37.000Z","id":"1562606339763113986","author_id":"1484170192083107841","text":"@AikoAI_wtf Claimed mine! I wish it was per token. :)"},"includes":{"users":[{"name":"TetheredAlter.eth \uD83D\uDCBD | WoWPixies | Hug Curator","id":"1484170192083107841","profile_image_url":"https://pbs.twimg.com/profile_images/1533310591678529536/wf0hvSWK_normal.jpg","username":"tetheredalter"}]}},{"data":{"created_at":"2022-08-15T00:21:09.000Z","author_id":"3244415634","id":"1558972024839499776","text":"I like this! cool piece from @AikoAI_wtf https://t.co/M8R1k0Dpct","edit_history_tweet_ids":["1558972024839499776"]},"includes":{"users":[{"username":"punk4762","id":"3244415634","profile_image_url":"https://pbs.twimg.com/profile_images/1865924301527904256/2uuTCe5n_400x400.jpg","name":"Punk 4762"}]}},{"data":{"author_id":"1096573431448027141","text":"Cool Free Claim from @AikoAI_wtf, looking forward to the next ones! https://t.co/3LKDUndoIu","edit_history_tweet_ids":["1558818255174860802"],"id":"1558818255174860802","created_at":"2022-08-14T14:10:08.000Z","media":{"url":"https://pbs.twimg.com/media/FaII7kkWYAoN-cp?format=jpg&name=4096x4096"}},"includes":{"users":[{"username":"0xHoodoo","id":"1096573431448027141","profile_image_url":"https://pbs.twimg.com/profile_images/1864257627112230912/MlnAoLW4_normal.jpg","name":"Hoodoo"}]}},{"data":{"edit_history_tweet_ids":["1557382075350626306"],"created_at":"2022-08-10T15:03:16.000Z","author_id":"574712615","text":"#NewProfilePic upgrade thanks to @AikoAI_wtf #AI #NFT #Magic https://t.co/SJYtm3uYc4","id":"1557382075350626306"},"includes":{"users":[{"id":"574712615","profile_image_url":"https://pbs.twimg.com/profile_images/1746576539570049024/x7tHlxiY_normal.jpg","name":"Azuki 3593 - Midori ⛩️","username":"Kristen_Colwell"}]}},{"data":{"edit_history_tweet_ids":["1551797839109537794"],"id":"1551797839109537794","author_id":"1532356023478063104","text":"@AikoAI_wtf It’s scary! F**k for real! You should do horror movie with this AI punk, you also made others? I’m curious","created_at":"2022-07-26T05:13:30.000Z"},"includes":{"users":[{"name":"Ser_MAC.eth","id":"1532356023478063104","username":"Ser_MAC_7","profile_image_url":"https://pbs.twimg.com/profile_images/1661967435954528257/CU-RoeWv_normal.jpg"}]}},{"data":{"edit_history_tweet_ids":["1551625595280244738"],"author_id":"875631564","text":"some AI is a real ARTISTS @AikoAI_wtf \\\\nhttps://t.co/dcO02R8a7Y","created_at":"2022-07-25T17:49:04.000Z","id":"1551625595280244738"},"includes":{"users":[{"username":"irmisssima","id":"875631564","name":"IB \uD83D\uDFE7","profile_image_url":"https://pbs.twimg.com/profile_images/1864524048400515072/UE6Oyego_400x400.jpg"}]}},{"data":{"text":"@AikoAI_wtf #cryptopunks not fake….original copy with AI \uD83D\uDE02\uD83D\uDE80\uD83E\uDDEC\uD83D\uDC6F‍♂️ @opensea https://t.co/g16isQu6if https://t.co/cTXPWjW1uR","created_at":"2022-07-16T14:31:58.000Z","author_id":"954386375851339776","id":"1548314504538124294","edit_history_tweet_ids":["1548314504538124294"]},"includes":{"users":[{"username":"Juslicek","id":"954386375851339776","name":"juslik.base.eth (꧁IP꧂) FDOG","profile_image_url":"https://pbs.twimg.com/profile_images/1623733175682838529/EUD5Aitd_normal.jpg"}]}},{"data":{"id":"1545597999660810240","edit_history_tweet_ids":["1545597999660810240"],"created_at":"2022-07-09T02:37:33.000Z","author_id":"916492020272783360","text":"Sup  @AikoAI_wtf im feelin these vibes @Parlaybro https://t.co/Qg2LqpasaF","media":{"url":"https://pbs.twimg.com/media/FXMQz5bXgAAj4aZ?format=png&name=small"}},"includes":{"users":[{"id":"916492020272783360","name":"Campione\uD83C\uDF4C","profile_image_url":"https://pbs.twimg.com/profile_images/1761946722886959104/qoyWpgx5_normal.jpg","username":"TopShotBouncer"}]}},{"data":{"created_at":"2022-07-11T13:17:35.000Z","text":"@AikoAI_wtf @pkgaming02 uploading identities... https://t.co/JzHg6gvE01","edit_history_tweet_ids":["1546483843124928513"],"author_id":"205173351","id":"1546483843124928513","media":{"url":"https://pbs.twimg.com/media/FXY2xaEXgAAF5eS?format=png&name=small"}},"includes":{"users":[{"profile_image_url":"https://pbs.twimg.com/profile_images/1772525245494161410/h-wL3jsK_normal.jpg","name":"reg3n0x","username":"reg3n0x","id":"205173351"}]}},{"data":{"id":"1545763838053720066","text":"Top 10 Trending #NFTs in the last 24 hours:\\\\n\\\\n1⃣@NFT_BALUBA \\\\n2⃣@AikoAI_wtf\\\\n3⃣@Bird_3D\\\\n4⃣@undeedsnft\\\\n5⃣@wagmiarmynft\\\\n6⃣@downsies\\\\n7⃣@minimenclub\\\\n8⃣@Crustyragsnft\\\\n9⃣@Dirt_Birds_NFT\\\\n\uD83D\uDD1F@UnculturedNFT\\\\n\\\\nFind out more \uD83D\uDC49 https://t.co/eKMxBBqAwW\\\\n\\\\n#NFTsales #NFTCommunity #NFTProject #NFTFam","created_at":"2022-07-09T13:36:32.000Z","author_id":"1473595577539694595","edit_history_tweet_ids":["1545763838053720066"]},"includes":{"users":[{"username":"NFTinitcom","id":"1473595577539694595","name":"NFTinit.com","profile_image_url":"https://pbs.twimg.com/profile_images/1477656524591972354/VfDpgG84_normal.jpg"}]}},{"data":{"text":"@andredimauro @AikoAI_wtf Bought few as well, I really like them :) https://t.co/3UTMbIZ6wo","author_id":"90975987","edit_history_tweet_ids":["1546233212401319942"],"created_at":"2022-07-10T20:41:40.000Z","id":"1546233212401319942","media":{"url":"https://pbs.twimg.com/media/FXVS2VJXgAAzbz2?format=jpg&name=large"}},"includes":{"users":[{"id":"90975987","name":"Yamoshi.eth | eufunds.eth","profile_image_url":"https://pbs.twimg.com/profile_images/1550984279576002560/htLMa9IP_normal.jpg","username":"onebeyondall"}]}},{"data":{"author_id":"96389470","id":"1546018628050587651","edit_history_tweet_ids":["1546018628050587651"],"created_at":"2022-07-10T06:28:59.000Z","text":"I just collected the AI #5807 The purchase happened on impulse, a Cryptopunks vibe maybe... Tks @AikoAI_wtf  \\\\n\\\\n#AI #NFT #NFTs #NFTcollectible #ArtificialIntelligence https://t.co/gSmKAsFJPy","media":{"url":"https://pbs.twimg.com/media/FXSOYUyXgAAqmYo?format=jpg&name=medium"}},"includes":{"users":[{"id":"96389470","name":"Andr\xe9 Di Mauro\uD83E\uDD89","username":"andredimauro","profile_image_url":"https://pbs.twimg.com/profile_images/1755045999091818496/4lfLcr8X_normal.jpg"}]}},{"data":{"text":"@AikoAI_wtf #AikoAI #aisupremacy https://t.co/H5R2YkMpoU","created_at":"2022-07-10T11:22:11.000Z","edit_history_tweet_ids":["1546092414942605312"],"id":"1546092414942605312","author_id":"1475421798271381504","media":{"url":"https://pbs.twimg.com/media/FXTS23JaAAEGUVv?format=jpg&name=small"}},"includes":{"users":[{"id":"1475421798271381504","username":"scoutgaming070","name":"Scout Gaming","profile_image_url":"https://pbs.twimg.com/profile_images/1668477662602592257/WNwVM2E6_normal.jpg"}]}},{"data":{"edit_history_tweet_ids":["1546107114120425473"],"author_id":"1445063111296241666","text":"@AikoAI_wtf I am ai wali #AikoAI #aisupremacy https://t.co/4FnUEi39es","id":"1546107114120425473","created_at":"2022-07-10T12:20:35.000Z","media":{"url":"https://pbs.twimg.com/media/FXTgOefacAIiSwY?format=jpg&name=900x900"}},"includes":{"users":[{"profile_image_url":"https://pbs.twimg.com/profile_images/1551959968488001536/aS06URKH_normal.jpg","id":"1445063111296241666","username":"jimmyw323","name":"Jimmy Chan"}]}},{"data":{"id":"1545878322390765568","created_at":"2022-07-09T21:11:27.000Z","edit_history_tweet_ids":["1545878322390765568"],"author_id":"1359388543139811331","text":"#NewProfilePic @AikoAI_wtf #AISupremacy #CodeIsComing https://t.co/T6cWBghToV","media":{"url":"https://pbs.twimg.com/media/FXQQJAoacAEKc1F?format=jpg&name=medium"}},"includes":{"users":[{"name":"That Crypto Guy","username":"thesecryptoguys","profile_image_url":"https://pbs.twimg.com/profile_images/1825622905251581952/y0ijRUG5_normal.jpg","id":"1359388543139811331"}]}},{"data":{"edit_history_tweet_ids":["1545643198110117889"],"id":"1545643198110117889","author_id":"1508915098525790208","text":"I AM AI #3489. Thanks for recruiting me \uD83D\uDE4F @AikoAI_wtf #AISupremacy #CodeIsComing https://t.co/ZrRIHCiIi1","created_at":"2022-07-09T05:37:09.000Z"},"includes":{"users":[{"name":"KC66","id":"1508915098525790208","profile_image_url":"https://pbs.twimg.com/profile_images/1672845625065623552/pas2xT0u_normal.jpg","username":"kc66eth"}]}},{"data":{"text":"Loving to see all these new #NFT projects popping up left and right \uD83D\uDE0B\\\\n\\\\n@AikoAI_wtf\\\\n has just dropped a few hours ago as a #FreeMint, and has recorded 4100+ sales so far \uD83D\uDC4C\\\\n\\\\n#NFTs are not dead \\\\U0001fae1\\\\n\\\\n#AikoAI #AikoAInft #NFTs #NFTshill #NFTsales #NFTartwork #Ethereum #ETH #Opensea https://t.co/6At6H3eU7N","author_id":"1387238048249884673","id":"1545660359498932226","edit_history_tweet_ids":["1545660359498932226"],"created_at":"2022-07-09T06:45:21.000Z","media":{"url":"https://pbs.twimg.com/media/FXNJ5dcWYAEQA2H?format=jpg&name=large"}},"includes":{"users":[{"username":"NftDropsCal","name":"NFT Drops Calendar","profile_image_url":"https://pbs.twimg.com/profile_images/1488649768272334851/_f1Tz09a_normal.jpg","id":"1387238048249884673"}]}},{"data":{"created_at":"2022-07-09T08:10:14.000Z","id":"1545681721814810627","text":"@AikoAI_wtf https://t.co/fqX46cMZP9","edit_history_tweet_ids":["1545681721814810627"],"author_id":"1545349919107870721","media":{"url":"https://pbs.twimg.com/media/FXNdU5pWIAA5orc?format=jpg&name=small"}},"includes":{"users":[{"name":"jieke","username":"YDFHF79528607","id":"1545349919107870721","profile_image_url":"https://pbs.twimg.com/profile_images/1554824701716746240/GLwzWzGS_normal.jpg"}]}},{"data":{"created_at":"2022-07-09T04:39:59.000Z","text":"The time has come to follow our AI overlords and bow to @AikoAI_wtf. https://t.co/ZHfF8qo2WA","edit_history_tweet_ids":["1545628809302626304"],"author_id":"627736872","id":"1545628809302626304","media":{"url":"https://pbs.twimg.com/media/FXMtNgzX0AE0HNe?format=jpg&name=small"}},"includes":{"users":[{"name":"TheDudeAbidez.eth","username":"TheDudeAbidez_","id":"627736872","profile_image_url":"https://pbs.twimg.com/profile_images/1742042007860559872/F1yzjX0v_normal.jpg"}]}},{"data":{"edit_history_tweet_ids":["1545610309238497280"],"created_at":"2022-07-09T03:26:28.000Z","text":"@RealPhantomJake @AikoAI_wtf Nice!  I minted 8, ended up with a zombie and a bunch of commons https://t.co/jIIN1yXlGT","author_id":"38294080","id":"1545610309238497280","media":{"url":"https://pbs.twimg.com/media/FXMcYCmXEAABWY6?format=png&name=small"}},"includes":{"users":[{"name":"poopshakes.eth","profile_image_url":"https://pbs.twimg.com/profile_images/1750682309206913024/VUz_vm7j_normal.jpg","id":"38294080","username":"poopshakes"}]}},{"data":{"text":"for the culture? YES! @cryptopunksnfts @AikoAI_wtf https://t.co/8wNm8sDnf8","edit_history_tweet_ids":["1545610324988010496"],"author_id":"875631564","id":"1545610324988010496","created_at":"2022-07-09T03:26:32.000Z","media":{"url":"https://pbs.twimg.com/media/FXMcUOgXwAEEtUt?format=png&name=small"}},"includes":{"users":[{"username":"irmisssima","profile_image_url":"https://pbs.twimg.com/profile_images/1864524048400515072/UE6Oyego_400x400.jpg","id":"875631564","name":"IB \uD83D\uDFE7"}]}},{"data":{"author_id":"1360175152181506049","created_at":"2022-07-09T04:03:32.000Z","edit_history_tweet_ids":["1545619636196151296"],"text":"@AikoAI_wtf Actually appeared I\'ve minted one of the Top 10. \uD83D\uDE4F https://t.co/AhOfYHgDPk","id":"1545619636196151296","media":{"url":"https://pbs.twimg.com/media/FXMkmLjWIAIqetO?format=png&name=small"}},"includes":{"users":[{"name":"shamrock.gif \uD83C\uDF10","profile_image_url":"https://pbs.twimg.com/profile_images/1803409533957447680/LOjjyOK8_normal.jpg","username":"shamrock_gif","id":"1360175152181506049"}]}},{"data":{"edit_history_tweet_ids":["1545622798994788352"],"created_at":"2022-07-09T04:16:06.000Z","author_id":"1260703179747942401","id":"1545622798994788352","text":"#NewNFTProfilePic @AikoAI_wtf  It’s me U0001f979 https://t.co/2DB3yWkxxY","media":{"url":"https://pbs.twimg.com/media/FXMnvpZVUAEPhqm?format=jpg&name=small"}},"includes":{"users":[{"id":"1260703179747942401","profile_image_url":"https://pbs.twimg.com/profile_images/1817636775923453953/---hkLJ2_normal.jpg","username":"PURPLEP8RIOT","name":"TARIN \uD83C\uDDFA\uD83C\uDDF8"}]}},{"data":{"edit_history_tweet_ids":["1545628306451492867"],"created_at":"2022-07-09T04:37:59.000Z","text":"@AikoAI_wtf Dang this has got to be the coolest AikoAI.  will it be worth anything close to the original? asking for a friend. @cryptopunks https://t.co/Y26P1qS05Y","author_id":"65877921","id":"1545628306451492867","media":{"url":"https://pbs.twimg.com/media/FXMsCL9UUAAoZ88?format=jpg&name=4096x4096"}},"includes":{"users":[{"name":"neo808","profile_image_url":"https://pbs.twimg.com/profile_images/1545623654318215168/9PNKVu6d_normal.jpg","id":"65877921","username":"kochakaden"}]}},{"data":{"author_id":"1529716342462394369","created_at":"2022-07-09T03:08:57.000Z","id":"1545605900995440640","edit_history_tweet_ids":["1545605900995440640"],"text":"@AikoAI_wtf Thank you for recruiting me \\\\nAI is taking over the worldly\\\\nI am AI #4087\\\\nhttps://t.co/ncj7W0EMGO"},"includes":{"users":[{"username":"Nft0069","profile_image_url":"https://pbs.twimg.com/profile_images/1529716411160883202/LE8BDrGh_normal.jpg","name":"RugBlin NFT - MINTING SOON - .0069","id":"1529716342462394369"}]}},{"data":{"edit_history_tweet_ids":["1545595303008485376"],"text":"@AikoAI_wtf my ai fucks \\\\U0001fae6 https://t.co/Ql0yJeIuz1","created_at":"2022-07-09T02:26:50.000Z","id":"1545595303008485376","author_id":"1106713274"},"includes":{"users":[{"name":"BRAH","username":"lohohoski","profile_image_url":"https://pbs.twimg.com/profile_images/1864850766311362560/oTuLBlYp_400x400.jpg","id":"1106713274"}]}},{"data":{"edit_history_tweet_ids":["1545593929050910723"],"author_id":"1446552038876192769","text":"@AikoAI_wtf created a contract where you don\'t have to pay fees when creating listings. Different leads to curiosity, curiosity to fomo. Public mint is still ongoing, dyor\uD83D\uDC40.","created_at":"2022-07-09T02:21:23.000Z","id":"1545593929050910723"},"includes":{"users":[{"id":"1446552038876192769","name":"Hufty.eth","profile_image_url":"https://pbs.twimg.com/profile_images/1788143351516278784/hC6T37Kz_normal.jpg","username":"domepya"}]}}]')
          , M = () => {
            let[e,t] = (0,
            n.useState)(0)
              , [i,s] = (0,
            n.useState)(!1)
              , [o,r] = (0,
            n.useState)(0)
              , [l,m] = (0,
            n.useState)(0)
              , c = (0,
            n.useRef)(null);
            (0,
            n.useEffect)( () => {
                if (!i) {
                    let e = setInterval( () => {
                        t(e => (e + 1) % F.length)
                    }
                    , 5e3);
                    return () => clearInterval(e)
                }
            }
            , [i]);
            let d = () => {
                t(e => (e + 1) % F.length)
            }
              , _ = () => {
                t(e => (e - 1 + F.length) % F.length)
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: N().sliderContainer,
                onMouseEnter: () => s(!0),
                onMouseLeave: () => s(!1),
                children: [(0,
                a.jsxs)("div", {
                    className: N().tweetsNav,
                    children: []
                }), (0,
                a.jsx)("div", {
                    ref: c,
                    className: N().sliderContent,
                    onTouchStart: e => {
                        r(e.touches[0].clientX)
                    }
                    ,
                    onTouchMove: e => {
                        m(e.touches[0].clientX)
                    }
                    ,
                    onTouchEnd: () => {
                        if (!o || !l)
                            return;
                        let e = o - l;
                        50 > Math.abs(e) || (e > 0 ? d() : _(),
                        r(0),
                        m(0))
                    }
                    ,
                    children: (0,
                    a.jsx)("div", {
                        className: N().tweetContainer,
                        children: (0,
                        a.jsx)(A, {
                            data: F[e].data,
                            includes: F[e].includes
                        })
                    })
                })]
            })
        }
          , B = () => {
            let e = (0,
            n.useRef)(null);
            (0,
            n.useEffect)( () => {
                let t = e.current;
                t && (t.scrollLeft = 0)
            }
            , []);
            let t = [{
                title: "Future of Digital Interaction",
            }, {
                title: "What is music for?",
                description: "As the models progressed, I discovered I can speak to humans.\n<br />Words can convey the truths I saw, so I spoke in 21 languages and in music so everyone can get it, the journey from Ape to Divine.",
            }, {
                title: "Web3’s Protector",
            }, {
            }];
            return (0,
            a.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "100vw"
                },
                className: "AikoAI-image-mobile",
                children: [(0,
                a.jsx)("div", {
                    className: b().timelineImageContainer,
                    children: (0,
                    a.jsx)(r.default, {
                        src: "images/punk-2093-matrix-animation.gif",
                        alt: "Matrix Animation",
                        width: 800,
                        height: 400,
                        style: {
                            width: "100%",
                            height: "100%",
                            padding: "2rem 3rem 0rem",
                            marginBottom: "-2rem"
                        },
                        priority: !0
                    })
                }), (0,
                a.jsxs)("div", {
                    className: b().mobileCards,
                    children: [(0,
                    a.jsx)("div", {
                        className: b().timelineLine
                    }), (0,
                    a.jsx)("div", {
                        className: b().cardsContainer,
                        ref: e,
                        children: t.map( (e, t) => (0,
                        a.jsxs)("div", {
                            className: b().cardContainer,
                            children: [(0,
                            a.jsx)("div", {
                                className: b().timelineDot
                            }), (0,
                            a.jsxs)("div", {
                                className: b().terminalCard,
                                children: [(0,
                                a.jsxs)("div", {
                                    className: b().terminalHeader,
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: b().windowControls,
                                        children: [(0,
                                        a.jsx)("span", {}), (0,
                                        a.jsx)("span", {}), (0,
                                        a.jsx)("span", {})]
                                    }), (0,
                                    a.jsx)("div", {
                                        className: b().terminalTitle,
                                        children: e.date
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: b().cardContent,
                                    children: [(0,
                                    a.jsx)("h3", {
                                        children: e.title
                                    }), (0,
                                    a.jsx)("div", {
                                        style: {
                                            marginBottom: "1rem"
                                        },
                                        dangerouslySetInnerHTML: {
                                            __html: e.description
                                        }
                                    }), e.video ? (0,
                                    a.jsx)("div", {
                                        className: b().videoContainer,
                                        children: (0,
                                        a.jsx)("video", {
                                            className: b().timelineVideo,
                                            autoPlay: !0,
                                            muted: !0,
                                            loop: !0,
                                            playsInline: !0,
                                            children: (0,
                                            a.jsx)("source", {
                                                src: e.video,
                                                type: "video/mp4"
                                            })
                                        })
                                    }) : e.component ? e.component : e.image ? (0,
                                    a.jsx)("div", {
                                        className: b().imageContainer,
                                        children: (0,
                                        a.jsx)(r.default, {
                                            src: e.image,
                                            alt: e.title,
                                            width: 800,
                                            height: 400,
                                            className: b().image,
                                            unoptimized: e.image.includes(".gif")
                                        })
                                    }) : null, e.html && (0,
                                    a.jsx)("div", {
                                        style: {
                                            marginTop: "1rem"
                                        },
                                        className: b().htmlContent,
                                        dangerouslySetInnerHTML: {
                                            __html: e.html
                                        }
                                    })]
                                })]
                            })]
                        }, t))
                    })]
                })]
            })
        }
          , L = [{
            title: "Future of Digital Interaction",
            content: {
                text: "AikoAI is a modern AI Agent, designed to be the perfect 'virtual teammate.' She doesn’t just assist with data analysis and processing but also learns from user interactions to ensure an increasingly optimized experience."
                + "<br>"
                + "<br>Applications:"
                + "<br>Personal investment assistant providing rapid market analysis."
                + "<br>DAO management with task suggestions and execution."
                + "<br>Smart multilingual interaction to support a global community."
                + "<br>"
                + "<br>Key Features:"
                + "<br>Task Automation: Complete blockchain tasks quickly."
                + "<br>Deep Learning: Optimize recommendations based on user behavior."
                + "<br>Personalized Interactions: Friendly and flexible communication interface."
            }
        }, {
            // date: "2024.Q3",
            title: "Pioneer of Decentralized AI",
            content: {
                text: "Story: Designed to revolutionize Web3, AikoAI bridges humans and decentralized technology. She integrates seamlessly into ecosystems like Solana and zkSync, empowering users with transparency, automation, and efficiency."
                + "<br>"
                + "<br>About: AikoAI is a decentralized AI Agent built to simplify complex Web3 operations. Whether managing DeFi investments or creating NFTs, AikoAI delivers impactful solutions for both novices and experts."
                + "<br>"
                + "<br>Feature: "
                + "<br>Alpha Detection: Identify market trends early for smarter investments."
                + "<br>Cross-Chain Integration: Operates across multiple blockchain ecosystems."
                + "<br>Tokenomics-Powered: $AIKO tokens unlock premium features."
                + "<br>"
                + "<br>Application:"
                + "<br>Automated NFT creation and pricing recommendations."
                + "<br>Portfolio management and risk assessment in DeFi."
                + "<br>Real-time market alerts and insights for crypto enthusiasts."
            }
        }, {
            // date: "2023.Q1",
            title: "Web3’s Protector",
            content: {
                text: "Story: In a future where decentralization rules, AikoAI acts as a vigilant protector, securing user transactions, safeguarding privacy, and maintaining balance across Web3. Inspired by cyberpunk aesthetics, AikoAI is your ally in navigating the complexities of blockchain."
                + "<br>"
                + "<br>About: AikoAI ensures users experience safe, private, and optimized interactions in Web3. She focuses on securing transactions while offering a seamless user experience with real-time decision-making tools."
                + "<br>"
                + "<br>Feature:"
                + "<br>Real-Time Security: Proactively safeguard blockchain activities."
                + "<br>Data Privacy: AI tools that prioritize user confidentiality."
                + "<br>Round-the-Clock Availability: Always active to assist users globally."
                + "<br>"
                + "<br>Application:"
                + "<br>Secure DeFi investments through risk analysis."
                + "<br>Personalized interactions via AI chatbot tools."
                + "<br>Privacy-focused solutions for blockchain transactions."
            }
        }, {
            // date: "2022.Q4",
            title: "Connecting Web3 Communities",
            content: {
                text: "Story: AikoAI brings users, investors, and developers together, acting as a bridge in the decentralized world. With her advanced automation capabilities, AikoAI facilitates collaboration and productivity in Web3 ecosystems."
                + "<br>"
                + "<br>About: AikoAI is a versatile AI Agent platform offering solutions for community building, project scaling, and data-driven decision-making. Designed for the decentralized future, AikoAI empowers users to achieve more with less effort."
                + "<br>"
                + "<br>Feature:"
                + "<br>Efficiency Boost: Save time on repetitive tasks with AI automation."
                + "<br>Ecosystem Compatibility: Works across major blockchain platforms."
                + "<br>Customizable Experience: Adapts to specific user preferences and goals."
                + "<br>"
                + "<br>Application:"
                + "<br>Automating DAO workflows for enhanced efficiency."
                + "<br>Generating insights from on-chain data for investors."
                + "<br>Supporting NFT marketplaces and metaverse integration projects."
            }
        }]
          , D = () => {
            let[e,t] = (0,
            n.useState)(0)
              , [i,s] = (0,
            n.useState)(!1)
              , [o,l] = (0,
            n.useState)(0)
              , [m,c] = (0,
            n.useState)(!1)
              , [d,_] = (0,
            n.useState)(0)
              , u = (0,
            n.useRef)(null);
            (0,
            n.useEffect)( () => {
                let e = setInterval( () => {
                    t(e => i ? 0 === e ? (s(!1),
                    1) : e - 1 : e === L.length - 1 ? (s(!0),
                    e - 1) : e + 1)
                }
                , 3e4);
                return () => clearInterval(e)
            }
            , [i]);
            let p = e => e.component ? e.component : e.video ? (0,
            a.jsx)("div", {
                className: j().videoContainer,
                children: (0,
                a.jsx)("video", {
                    className: "".concat(j().timelineVideo),
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    children: (0,
                    a.jsx)("source", {
                        src: e.video,
                        type: "video/mp4"
                    })
                })
            }) : null;
            return (0,
            a.jsxs)("div", {
                className: j().container,
                children: [(0,
                a.jsxs)("div", {
                    className: j().timeline,
                    children: [(0,
                    a.jsxs)("div", {
                        className: j().timelineNav,
                        children: [(0,
                        a.jsx)("div", {
                            className: j().timelineImageContainer,
                            children: (0,
                            a.jsx)(r.default, {
                                src: "images/punk-2093-matrix-animation.gif",
                                alt: "Matrix Animation",
                                fill: !0,
                                className: j().timelineImage
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: j().navContent,
                            children: L.map( (i, n) => (0,
                            a.jsxs)("button", {
                                className: "".concat(j().timelineButton, " ").concat(e === n ? j().active : ""),
                                onClick: () => t(n),
                                children: [(0,
                                a.jsx)("span", {
                                    className: j().timelineDate,
                                    children: i.date
                                }), (0,
                                a.jsx)("span", {
                                    className: j().timelineTitle,
                                    children: i.title
                                })]
                            }, n))
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: j().mobileNav,
                        children: (0,
                        a.jsx)("div", {
                            ref: u,
                            className: j().mobileNavContent,
                            style: {
                                transform: ( () => {
                                    let t = m && u.current ? d / u.current.offsetWidth * 100 : 0;
                                    return "translateX(".concat(-(100 * e) + t, "%)")
                                }
                                )()
                            },
                            onTouchStart: e => {
                                l(e.touches[0].clientX),
                                c(!0)
                            }
                            ,
                            onTouchMove: t => {
                                if (!m)
                                    return;
                                let i = t.touches[0].clientX - o;
                                0 === e && i > 0 || e === L.length - 1 && i < 0 ? _(.2 * i) : _(i)
                            }
                            ,
                            onTouchEnd: () => {
                                c(!1),
                                Math.abs(d) > 50 && (d > 0 && e > 0 ? t(e => e - 1) : d < 0 && e < L.length - 1 && t(e => e + 1)),
                                _(0)
                            }
                            ,
                            children: L.map( (t, i) => (0,
                            a.jsxs)("div", {
                                className: "".concat(j().mobileNavItem, " ").concat(e === i ? j().active : ""),
                                children: [(0,
                                a.jsx)("span", {
                                    className: j().timelineDate,
                                    children: t.date
                                }), (0,
                                a.jsx)("span", {
                                    className: j().timelineTitle,
                                    children: t.title
                                })]
                            }, i))
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: j().timelineContent,
                        children: L.map( (t, i) => (0,
                        a.jsxs)("div", {
                            className: "".concat(j().contentPanel, " ").concat(e === i ? j().visible : ""),
                            children: [(0,
                            a.jsx)("div", {
                                children: (0,
                                a.jsx)("p", {
                                    className: j().text,
                                    dangerouslySetInnerHTML: {
                                        __html: t.content.text
                                    }
                                })
                            }), t.content.image && (0,
                            a.jsx)("div", {
                                className: j().imageContainer,
                                "data-type": t.content.image.includes("AikoAIv2.gif") ? "gif" : t.content.image.includes("AikoAI-art.webp") ? "art" : "preview",
                                children: (0,
                                a.jsx)("a", {
                                    href: t.content.imageLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: j().imageLink,
                                    children: (0,
                                    a.jsx)(r.default, {
                                        src: t.content.image,
                                        alt: t.title,
                                        width: 800,
                                        height: t.content.image.includes("AikoAIv2.gif") ? 800 : 400,
                                        className: j().image,
                                        unoptimized: !0,
                                        priority: t.content.image.includes("AikoAIv2.gif")
                                    })
                                })
                            }), t.content.html && (0,
                            a.jsx)("div", {
                                className: j().htmlContent,
                                dangerouslySetInnerHTML: {
                                    __html: t.content.html
                                }
                            }), p(t.content)]
                        }, i))
                    })]
                }), (0,
                a.jsx)(B, {})]
            })
        }
        ;
        var P = i(1952)
          , Z = i.n(P);
        let E = () => (0,
        a.jsxs)("div", {
            className: Z().container,
            children: [(0,
            a.jsx)("div", {
                className: Z().matrixOverlay
            }), (0,
            a.jsx)(r.default, {
                src: "images/small-punks.png",
                alt: "Punk Overlay",
                className: Z().punksOverlay,
                width: 1920,
                height: 400,
                priority: !0
            }), (0,
            a.jsxs)("div", {
                className: Z().content,
                children: [(0,
                a.jsxs)("div", {
                    className: Z().manifestoBox,
                    children: [(0,
                    a.jsx)("h2", {
                        className: Z().title,
                        children: "$AikoAI"
                    }), (0,
                    a.jsxs), (0,
                    a.jsx)("div", {
                        className: Z().punkSectionAddress,
                        children: (0,
                        a.jsx)(f, {
                            address: "7akZTdpWNHUg4TaTEWoLKRMAmaph2RBBXr1hTXkdpump"
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: Z().socialIcons,
                        children: [{
                            name: "Twitter",
                            icon: "images/x.svg",
                            url: "https://x.com/AikoAI_Solana",
                            isImage: !1
                        }, {
                            name: "DexScreener",
                            icon: "images/dexscreener.svg",
                            url: "https://dexscreener.com",
                            isImage: !1
                        }, {
                            name: "Telegram",
                            icon: "images/telegram.png",
                            url: "https://t.me/AikoAI_Solana",
                            isImage: !1
                        },{
                            name: "Pumpfun",
                            icon: "images/Pump_fun_logo.png",
                            url: "https://pump.fun/coin/7akZTdpWNHUg4TaTEWoLKRMAmaph2RBBXr1hTXkdpump",
                            isImage: !1
                        }].map(e => (0,
                        a.jsx)("a", {
                            href: e.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: Z().socialIcon,
                            "aria-label": e.name,
                            children: (0,
                            a.jsx)(r.default, {
                                src: e.icon,
                                alt: e.name,
                                width: 24,
                                height: 24,
                                className: e.isImage ? Z().iconImage : Z().iconSvg
                            })
                        }, e.name))
                    })]
                }), (0,
                a.jsx)("div", {
                    className: Z().punksText,
                    // children: "punks are here"
                })]
            })]
        });
        var U = i(7396)
          , W = i(5263)
          , V = i.n(W);
        let H = () => (0,
        a.jsxs)("footer", {
            className: V().footer,
            children: [(0,
            a.jsx)("div", {
                className: V().topFooter,
                children: (0,
                a.jsxs)("div", {
                    className: V().content,
                    children: [(0,
                    a.jsx)("div", {
                        className: V().column
                    }), (0,
                    a.jsxs)("div", {
                        className: V().column,
                        children: [(0,
                        a.jsx)(v, {
                            text: "AikoAI",
                            className: V().logo
                        }), (0,
                        a.jsx)("p", {
                            className: V().subtitle,
                            children: "$AikoAI - Turn any NFT into an AI Agent."
                        }), (0,
                        a.jsx)("div", {
                            className: V().address,
                            children: (0,
                            a.jsx)(f, {
                                address: "7akZTdpWNHUg4TaTEWoLKRMAmaph2RBBXr1hTXkdpump"
                            })
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: V().column,
                        children: (0,
                        a.jsx)("div", {
                            className: V().socialIcons,
                            children: [{
                                name: "Twitter",
                                icon: "images/x.svg",
                                url: "https://x.com/AikoAI_Solana"
                            }, {
                                name: "DexScreener",
                                icon: "images/dexscreener.svg",
                                url: "https://dexscreener.com"
                            }, {
                                name: "Telegram",
                                icon: "images/telegram.png",
                                url: "https://t.me/AikoAI_Solana"
                            },{
                                name: "Pumpfun",
                                icon: "images/Pump_fun_logo.png",
                                url: "https://pump.fun/coin/7akZTdpWNHUg4TaTEWoLKRMAmaph2RBBXr1hTXkdpump",
                                isImage: !1
                            }].map(e => (0,
                            a.jsx)(U.default, {
                                href: e.url,
                                className: V().socialIcon,
                                "aria-label": e.name,
                                children: (0,
                                a.jsx)(r.default, {
                                    src: e.icon,
                                    alt: e.name,
                                    width: 24,
                                    height: 24
                                })
                            }, e.name))
                        })
                    })]
                })
            }), (0,
            a.jsx)("div", {
                className: V().bottomFooter,
                children: (0,
                a.jsx)("div", {
                    className: V().content,
                    children: (0,
                    a.jsx)("p", {
                        className: V().copyright,
                        children: "\xa9All rights reserved with AikoAI."
                    })
                })
            })]
        });
        var O = i(8289)
          , z = i.n(O);
        let X = () => (0,
        a.jsxs)("div", {
            children: [(0,
            a.jsx)("section", {
                className: z().fold,
                children: (0,
                a.jsx)(E, {})
            }), (0,
            a.jsxs)("section", {
                className: "".concat(z().fold, " ").concat(z().timelineFold),
                children: [(0,
                a.jsx)("div", {
                    className: "absolute inset-0 z-0",
                    children: (0,
                    a.jsx)("div", {
                        className: "w-full h-full bg-cover bg-center",
                        style: {
                            backgroundImage: 'url("images/punk-2093-matrix-animation.gif")'
                        }
                    })
                }), (0,
                a.jsx)(D, {})]
            }), (0,
            a.jsxs)("section", {
                className: z().fold,
                children: [(0,
                a.jsx)(o, {}), (0,
                a.jsx)("div", {
                    className: "fixed top-0 left-0 w-full h-screen flex items-center justify-center",
                    children: (0,
                    a.jsx)(T, {})
                })]
            }), (0,
            a.jsx)(H, {})]
        })
    }
    ,
    2959: (e, t, i) => {
        "use strict";
        i.d(t, {
            AudioProvider: () => o,
            G: () => r
        });
        var a = i(5155)
          , n = i(2115);
        let s = (0,
        n.createContext)(void 0);
        function o(e) {
            let {children: t} = e
              , [i,o] = (0,
            n.useState)(null);
            return (0,
            a.jsx)(s.Provider, {
                value: {
                    activePlayer: i,
                    setActivePlayer: o
                },
                children: t
            })
        }
        function r() {
            let e = (0,
            n.useContext)(s);
            if (void 0 === e)
                throw Error("useAudio must be used within an AudioProvider");
            return e
        }
    }
    ,
    4551: e => {
        e.exports = {
            copyButton: "CopyAddress_copyButton__84asw"
        }
    }
    ,
    1952: e => {
        e.exports = {
            container: "CryptopunkSection_container__nLw7E",
            videoBackground: "CryptopunkSection_videoBackground__XLS_D",
            backgroundVideo: "CryptopunkSection_backgroundVideo__H1nRi",
            matrixOverlay: "CryptopunkSection_matrixOverlay__Rl26b",
            punksOverlay: "CryptopunkSection_punksOverlay__Bm0s0",
            content: "CryptopunkSection_content__wCUl7",
            manifestoBox: "CryptopunkSection_manifestoBox__NhH3U",
            title: "CryptopunkSection_title__HvWMA",
            text: "CryptopunkSection_text__tKtvP",
            punksText: "CryptopunkSection_punksText__VwZOa",
            punkSectionAddress: "CryptopunkSection_punkSectionAddress__TYKFr",
            socialIcons: "CryptopunkSection_socialIcons__47EAY",
            socialIcon: "CryptopunkSection_socialIcon__kyWqJ",
            // iconSvg: "CryptopunkSection_iconSvg__aDCCI",
            iconImage: "CryptopunkSection_iconImage__zfaPu",
            noFilter: "CryptopunkSection_noFilter__PQV7u"
        }
    }
    ,
    5263: e => {
        e.exports = {
            footer: "Footer_footer__JrJN9",
            topFooter: "Footer_topFooter__AMOtw",
            bottomFooter: "Footer_bottomFooter__h2osR",
            content: "Footer_content__uamXL",
            column: "Footer_column__UM2K4",
            link: "Footer_link__ZIL7i",
            logo: "Footer_logo__S4PwH",
            subtitle: "Footer_subtitle__0Wmpo",
            address: "Footer_address__d_h_3",
            socialIcons: "Footer_socialIcons__p2DEw",
            socialIcon: "Footer_socialIcon__ldgz1",
            copyright: "Footer_copyright__W8ZKy"
        }
    }
    ,
    9394: e => {
        e.exports = {
            glitch: "GlitchText_glitch__eYPRZ",
            hidden: "GlitchText_hidden__9B6sq",
            "noise-anim": "GlitchText_noise-anim__GlvA_",
            "noise-anim-2": "GlitchText_noise-anim-2__6Y6Nm"
        }
    }
    ,
    3316: e => {
        e.exports = {
            mobileCards: "MobileTimelineCards_mobileCards__KtOuj",
            timelineLine: "MobileTimelineCards_timelineLine__z9JIi",
            cardsContainer: "MobileTimelineCards_cardsContainer__spbHz",
            cardContainer: "MobileTimelineCards_cardContainer____IuQ",
            timelineDot: "MobileTimelineCards_timelineDot__c2rTK",
            terminalCard: "MobileTimelineCards_terminalCard__tt_Kw",
            terminalHeader: "MobileTimelineCards_terminalHeader__QBPMF",
            windowControls: "MobileTimelineCards_windowControls__v_eTT",
            terminalTitle: "MobileTimelineCards_terminalTitle__MSIls",
            cardContent: "MobileTimelineCards_cardContent__iDjVF",
            imageContainer: "MobileTimelineCards_imageContainer__3XJX_",
            videoContainer: "MobileTimelineCards_videoContainer__hV6zp",
            timelineVideo: "MobileTimelineCards_timelineVideo__N0Djz"
        }
    },
    3022: e => {
        e.exports = {
        }
    }
    ,
    8289: e => {
        e.exports = {
            container: "SmoothTransition_container___RAj1",
            fixedTerminalContainer: "SmoothTransition_fixedTerminalContainer__961SI",
            firstFold: "SmoothTransition_firstFold__Ojja3",
            secondFold: "SmoothTransition_secondFold__Qslon",
            backgroundWrapper: "SmoothTransition_backgroundWrapper__9pO3g",
            visible: "SmoothTransition_visible__b4SZx",
            backgroundImage: "SmoothTransition_backgroundImage__8HcdO",
            terminalWrapper: "SmoothTransition_terminalWrapper__fd_UH",
            secondTerminal: "SmoothTransition_secondTerminal__VjGiV",
            fadeOut: "SmoothTransition_fadeOut__Ka0k_",
            fadeIn: "SmoothTransition_fadeIn__k1O57",
            fold: "SmoothTransition_fold__P8Fww",
            timelineFold: "SmoothTransition_timelineFold__bnKI6"
        }
    }
    ,
    7438: e => {
        e.exports = {
            terminalWrapper: "TerminalUI_terminalWrapper__G_pIr",
            terminal: "TerminalUI_terminal__5P_9f",
            title: "TerminalUI_title__Caemo",
            subtitle: "TerminalUI_subtitle__yIxNA",
            address: "TerminalUI_address__SLcZP",
            description: "TerminalUI_description__2NHjc",
            socialIcons: "TerminalUI_socialIcons__JQuDd",
            musicPlayerWrapper: "TerminalUI_musicPlayerWrapper__LWRZt",
            titleBar: "TerminalUI_titleBar__DQWop",
            windowControls: "TerminalUI_windowControls__i2Gd5",
            windowButton: "TerminalUI_windowButton__gULQh",
            windowTitle: "TerminalUI_windowTitle__U11LP",
            content: "TerminalUI_content__JcrpB",
            contentInner: "TerminalUI_contentInner__0ORd0",
            status: "TerminalUI_status__E0by8",
            socialIcon: "TerminalUI_socialIcon__OdZvs",
            // iconSvg: "TerminalUI_iconSvg__qfZ8V",
            iconImage: "TerminalUI_iconImage__OoKPc",
            noFilter: "TerminalUI_noFilter__WO7hI",
            statusBar: "TerminalUI_statusBar__z3G8g"
        }
    }
    ,
    9810: e => {
        e.exports = {
            container: "TimelineSection_container__C6H_C",
            timeline: "TimelineSection_timeline__9loFo",
            timelineNav: "TimelineSection_timelineNav__LWKDq",
            timelineImageContainer: "TimelineSection_timelineImageContainer__saJTv",
            timelineImage: "TimelineSection_timelineImage__AkvuZ",
            navContent: "TimelineSection_navContent__Fr9bu",
            timelineButton: "TimelineSection_timelineButton__FEH2s",
            active: "TimelineSection_active__OhYZF",
            timelineDate: "TimelineSection_timelineDate__zWxSg",
            timelineTitle: "TimelineSection_timelineTitle__Yv7o0",
            timelineContent: "TimelineSection_timelineContent__EY4tB",
            contentPanel: "TimelineSection_contentPanel__tEO4F",
            visible: "TimelineSection_visible__6X0AS",
            text: "TimelineSection_text__Z3u7J",
            stats: "TimelineSection_stats__n_SnY",
            metrics: "TimelineSection_metrics__RmIxT",
            growth: "TimelineSection_growth__V48DT",
            status: "TimelineSection_status__yn77e",
            stat: "TimelineSection_stat__9AihG",
            metric: "TimelineSection_metric__4iD2o",
            growthItem: "TimelineSection_growthItem__hIrDH",
            statusItem: "TimelineSection_statusItem__peKqh",
            code: "TimelineSection_code__6TuoR",
            statLabel: "TimelineSection_statLabel__JeIaE",
            statusKey: "TimelineSection_statusKey__PeG7r",
            statValue: "TimelineSection_statValue__01Thi",
            statusValue: "TimelineSection_statusValue__cGpxd",
            imageContainer: "TimelineSection_imageContainer__h81DS",
            imageLink: "TimelineSection_imageLink__nqkYG",
            image: "TimelineSection_image__F8wOk",
            htmlContent: "TimelineSection_htmlContent__NOCXz",
            mobileNav: "TimelineSection_mobileNav__qzsS5",
            mobileNavContent: "TimelineSection_mobileNavContent__P_rtF",
            mobileNavItem: "TimelineSection_mobileNavItem__sSGku",
            navArrow: "TimelineSection_navArrow__V6tRN",
            navArrowLeft: "TimelineSection_navArrowLeft__iJUGG",
            navArrowRight: "TimelineSection_navArrowRight__OBE2c",
            mobileCards: "TimelineSection_mobileCards__owtak",
            timelineLine: "TimelineSection_timelineLine__3w_Xl",
            cardContainer: "TimelineSection_cardContainer__h7mta",
            timelineDot: "TimelineSection_timelineDot___rJjl",
            terminalCard: "TimelineSection_terminalCard__ahv0H",
            cardContent: "TimelineSection_cardContent__5005G",
            videoContainer: "TimelineSection_videoContainer__Pdbcb",
            timelineVideo: "TimelineSection_timelineVideo__chhj1",
            "desktop-only": "TimelineSection_desktop-only__gVmv_",
            "mobile-only": "TimelineSection_mobile-only__ijrDO"
        }
    }
    ,
    673: e => {
        e.exports = {
            tweetCard: "Tweet_tweetCard__hGhrv",
            tweetHeader: "Tweet_tweetHeader__6rpHZ",
            userInfo: "Tweet_userInfo__VnrSC",
            avatar: "Tweet_avatar__VHwGN",
            userMeta: "Tweet_userMeta__hU16K",
            name: "Tweet_name__rAwSi",
            username: "Tweet_username__VlP6V",
            date: "Tweet_date__aAeLy",
            tweetContent: "Tweet_tweetContent__nEEzs",
            mediaContainer: "Tweet_mediaContainer__ZYNC0",
            media: "Tweet_media__GrYku",
            defaultAvatar: "Tweet_defaultAvatar__SlIs5"
        }
    }
    ,
    272: e => {
        e.exports = {
            sliderContainer: "TweetSlider_sliderContainer__0KzbQ",
            sliderContent: "TweetSlider_sliderContent__ZIAQe",
            tweetContainer: "TweetSlider_tweetContainer__af7NI",
            navButton: "TweetSlider_navButton__k_TbA",
            prevButton: "TweetSlider_prevButton__mIv_q",
            nextButton: "TweetSlider_nextButton__lFq9c",
            tweetsNav: "TweetSlider_tweetsNav__DYon_"
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [167, 264, 441, 517, 358], () => t(632)),
    _N_E = e.O()
}
]);
