"use strict";
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 5968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OM": () => (/* binding */ testimonialActiveOne),
/* harmony export */   "pt": () => (/* binding */ testimonialActiveTwo),
/* harmony export */   "_q": () => (/* binding */ testimonialActiveThree),
/* harmony export */   "rm": () => (/* binding */ heroSlider),
/* harmony export */   "wx": () => (/* binding */ brandslidertwoactive),
/* harmony export */   "zb": () => (/* binding */ testimonialActiveFour),
/* harmony export */   "xC": () => (/* binding */ testimonialActiveFive),
/* harmony export */   "jv": () => (/* binding */ testimonialActiveSix),
/* harmony export */   "VO": () => (/* binding */ screenshotslider),
/* harmony export */   "Ky": () => (/* binding */ teamSliderOne),
/* harmony export */   "Pe": () => (/* binding */ testimonialwidgetactive)
/* harmony export */ });
/* unused harmony exports brandSlider, serviceSliderActive */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function NextArrow(props) {
    const { onClick , icon , classList , containerClass  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: containerClass ? containerClass : "screenshot-arrows m-b-30",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: classList ? classList : "slick-arrow prev-arrow",
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: icon ? icon : "fas fa-arrow-left"
            })
        })
    }));
}
function PrevArrow(props) {
    const { onClick , icon , classList , containerClass  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: containerClass ? containerClass : "screenshot-arrows m-b-30",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: classList ? classList : "slick-arrow next-arrow",
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: icon ? icon : "fas fa-arrow-right"
            })
        })
    }));
}
const testimonialActiveOne = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const brandSlider = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2
            }
        }, 
    ]
};
const serviceSliderActive = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const testimonialActiveTwo = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const testimonialActiveThree = {
    infinite: true,
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {
    }),
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {
    }),
    responsive: [
        {
            breakpoint: 430,
            settings: {
                arrows: false
            }
        }, 
    ]
};
const heroSlider = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: true,
    fade: false,
    dots: true,
    swipe: true,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PrevArrow, {
        icon: "fas fa-angle-left",
        containerClass: "none",
        classList: "slick-arrow prev-arrow"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextArrow, {
        icon: "fas fa-angle-right",
        containerClass: "none",
        classList: "slick-arrow next-arrow"
    }),
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: false
            }
        },
        {
            breakpoint: 425,
            settings: {
                dots: false,
                arrows: false
            }
        }, 
    ]
};
const brandslidertwoactive = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        }, 
    ]
};
const testimonialActiveFour = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const testimonialActiveFive = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000
};
const testimonialActiveSix = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const screenshotslider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: <PrevArrow icon="far fa-angle-left" />,
    // nextArrow: <NextArrow icon="far fa-angle-right" />,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, 
    ]
};
const teamSliderOne = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const testimonialwidgetactive = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000
};



/***/ })

};
;