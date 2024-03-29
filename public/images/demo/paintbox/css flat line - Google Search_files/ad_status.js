<!DOCTYPE html>
<html lang="en">

<head>
    <meta charSet="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <style>
        html {
            line-height: 1.15;
            -webkit-text-size-adjust: 100%
        }

        body {
            margin: 0
        }

        main {
            display: block
        }

        h1 {
            font-size: 2em;
            margin: .67em 0
        }

        hr {
            box-sizing: content-box;
            height: 0;
            overflow: visible
        }

        a {
            background-color: transparent
        }

        b {
            font-weight: bolder
        }

        small {
            font-size: 80%
        }

        button,
        select {
            font-family: inherit;
            font-size: 100%;
            line-height: 1.15;
            margin: 0
        }

        button {
            overflow: visible
        }

        button,
        select {
            text-transform: none
        }

        [type=button],
        [type=reset],
        [type=submit],
        button {
            -webkit-appearance: button
        }

        [type=button]::-moz-focus-inner,
        [type=reset]::-moz-focus-inner,
        [type=submit]::-moz-focus-inner,
        button::-moz-focus-inner {
            border-style: none;
            padding: 0
        }

        [type=button]:-moz-focusring,
        [type=reset]:-moz-focusring,
        [type=submit]:-moz-focusring,
        button:-moz-focusring {
            outline: 1px dotted ButtonText
        }

        [type=checkbox],
        [type=radio] {
            box-sizing: border-box;
            padding: 0
        }

        [type=number]::-webkit-inner-spin-button,
        [type=number]::-webkit-outer-spin-button {
            height: auto
        }

        [type=search] {
            -webkit-appearance: textfield;
            outline-offset: -2px
        }

        [type=search]::-webkit-search-decoration {
            -webkit-appearance: none
        }

        ::-webkit-file-upload-button {
            -webkit-appearance: button;
            font: inherit
        }

        summary {
            display: list-item
        }

        [hidden] {
            display: none
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        hr,
        p {
            margin: 0
        }

        button {
            background-color: transparent;
            background-image: none;
            padding: 0
        }

        button:focus {
            outline: 1px dotted;
            outline: 5px auto -webkit-focus-ring-color
        }

        html {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
            line-height: 1.5
        }

        *,
        :after,
        :before {
            box-sizing: border-box;
            border: 0 solid #151922
        }

        hr {
            border-top-width: 1px
        }

        [role=button],
        button {
            cursor: pointer
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-size: inherit;
            font-weight: inherit
        }

        a {
            color: inherit;
            text-decoration: inherit
        }

        button,
        select {
            padding: 0;
            line-height: inherit;
            color: inherit
        }

        svg {
            display: block;
            vertical-align: middle
        }

        @media (min-width:576px) {
            .container {
                max-width: 576px
            }
        }

        @media (min-width:768px) {
            .container {
                max-width: 768px
            }
        }

        @media (min-width:992px) {
            .container {
                max-width: 992px
            }
        }

        @media (min-width:1200px) {
            .container {
                max-width: 1200px
            }
        }

        .container {
            width: 100%;
            margin-right: auto;
            margin-left: auto;
            padding-right: 16px;
            padding-left: 16px
        }

        @media (min-width:576px) {
            .container {
                max-width: 540px
            }
        }

        @media (min-width:768px) {
            .container {
                max-width: 720px
            }
        }

        @media (min-width:992px) {
            .container {
                max-width: 960px
            }
        }

        @media (min-width:1200px) {
            .container {
                max-width: 1140px
            }
        }

        .hover\:shadow-1,
        .hover\:shadow-2,
        .hover\:shadow-3,
        .hover\:shadow-4,
        .hover\:shadow-none {
            cursor: pointer;
            transition: box-shadow .25s ease-out
        }

        .hover\:shadow-1:hover,
        .hover\:shadow-2:hover,
        .hover\:shadow-3:hover,
        .hover\:shadow-4:hover,
        .hover\:shadow-none:hover {
            transition: box-shadow .25s ease-out
        }

        html {
            font-size: calc(10px + (500vw - 1600px)/ 880)
        }

        @media screen and (min-width:1200px) {
            html {
                font-size: 15px
            }
        }

        @media screen and (max-width:320px) {
            html {
                font-size: 10px
            }
        }

        body {
            font-family: Gordita, Helvetica Neue, Helvetica, Arial, sans-serif;
            color: #8a8c91;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: calc(15px + (100vw - 320px)/ 880)
        }

        @media screen and (min-width:1200px) {
            body {
                font-size: 16px
            }
        }

        @media screen and (max-width:320px) {
            body {
                font-size: 15px
            }
        }

        .bg-black {
            background-color: #151922
        }

        .bg-grey-darkest {
            background-color: #383c43
        }

        .bg-grey-dark {
            background-color: #8a8c91
        }

        .bg-grey {
            background-color: #b9babd
        }

        .bg-grey-lightest {
            background-color: #f8f8f8
        }

        .bg-white {
            background-color: #fff
        }

        .bg-blue-darkest {
            background-color: #0e1b33
        }

        .bg-blue-dark {
            background-color: #305eb2
        }

        .bg-blue {
            background-color: #4687ff
        }

        .bg-blue-lightest {
            background-color: #edf3ff
        }

        .bg-red-darkest {
            background-color: #850a1b
        }

        .bg-red-dark {
            background-color: #d2283e
        }

        .bg-red {
            background-color: #f64f64
        }

        .bg-red-lightest {
            background-color: #ffe4e8
        }

        .border-black {
            border-color: #151922
        }

        .border-grey-darkest {
            border-color: #383c43
        }

        .border-grey-dark {
            border-color: #8a8c91
        }

        .border-grey {
            border-color: #b9babd
        }

        .border-grey-lightest {
            border-color: #f8f8f8
        }

        .border-white {
            border-color: #fff
        }

        .border-blue-darkest {
            border-color: #0e1b33
        }

        .border-blue-dark {
            border-color: #305eb2
        }

        .border-blue {
            border-color: #4687ff
        }

        .border-blue-lightest {
            border-color: #edf3ff
        }

        .border-red-darkest {
            border-color: #850a1b
        }

        .border-red-dark {
            border-color: #d2283e
        }

        .border-red {
            border-color: #f64f64
        }

        .border-red-lightest {
            border-color: #ffe4e8
        }

        .rounded-1 {
            border-radius: 5px
        }

        .rounded-2 {
            border-radius: 10px
        }

        .rounded-3 {
            border-radius: 15px
        }

        .rounded-none {
            border-radius: 0
        }

        .rounded {
            border-radius: 3px
        }

        .rounded-full {
            border-radius: 9999px
        }

        .rounded-t-1 {
            border-top-left-radius: 5px
        }

        .rounded-r-1,
        .rounded-t-1 {
            border-top-right-radius: 5px
        }

        .rounded-b-1,
        .rounded-r-1 {
            border-bottom-right-radius: 5px
        }

        .rounded-b-1,
        .rounded-l-1 {
            border-bottom-left-radius: 5px
        }

        .rounded-l-1 {
            border-top-left-radius: 5px
        }

        .rounded-t-2 {
            border-top-left-radius: 10px
        }

        .rounded-r-2,
        .rounded-t-2 {
            border-top-right-radius: 10px
        }

        .rounded-b-2,
        .rounded-r-2 {
            border-bottom-right-radius: 10px
        }

        .rounded-b-2,
        .rounded-l-2 {
            border-bottom-left-radius: 10px
        }

        .rounded-l-2 {
            border-top-left-radius: 10px
        }

        .rounded-t-3 {
            border-top-left-radius: 15px
        }

        .rounded-r-3,
        .rounded-t-3 {
            border-top-right-radius: 15px
        }

        .rounded-b-3,
        .rounded-r-3 {
            border-bottom-right-radius: 15px
        }

        .rounded-b-3,
        .rounded-l-3 {
            border-bottom-left-radius: 15px
        }

        .rounded-l-3 {
            border-top-left-radius: 15px
        }

        .rounded-t-none {
            border-top-left-radius: 0;
            border-top-right-radius: 0
        }

        .rounded-r-none {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0
        }

        .rounded-b-none {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0
        }

        .rounded-l-none {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0
        }

        .rounded-t {
            border-top-left-radius: 3px
        }

        .rounded-r,
        .rounded-t {
            border-top-right-radius: 3px
        }

        .rounded-b,
        .rounded-r {
            border-bottom-right-radius: 3px
        }

        .rounded-b,
        .rounded-l {
            border-bottom-left-radius: 3px
        }

        .rounded-l {
            border-top-left-radius: 3px
        }

        .rounded-t-full {
            border-top-left-radius: 9999px
        }

        .rounded-r-full,
        .rounded-t-full {
            border-top-right-radius: 9999px
        }

        .rounded-b-full,
        .rounded-r-full {
            border-bottom-right-radius: 9999px
        }

        .rounded-b-full,
        .rounded-l-full {
            border-bottom-left-radius: 9999px
        }

        .rounded-l-full {
            border-top-left-radius: 9999px
        }

        .border-0 {
            border-width: 0
        }

        .border-2 {
            border-width: 2px
        }

        .border {
            border-width: 1px
        }

        .border-t-0 {
            border-top-width: 0
        }

        .border-r-0 {
            border-right-width: 0
        }

        .border-b-0 {
            border-bottom-width: 0
        }

        .border-l-0 {
            border-left-width: 0
        }

        .border-t-2 {
            border-top-width: 2px
        }

        .border-r-2 {
            border-right-width: 2px
        }

        .border-b-2 {
            border-bottom-width: 2px
        }

        .border-l-2 {
            border-left-width: 2px
        }

        .border-t {
            border-top-width: 1px
        }

        .border-r {
            border-right-width: 1px
        }

        .border-b {
            border-bottom-width: 1px
        }

        .border-l {
            border-left-width: 1px
        }

        .cursor-pointer {
            cursor: pointer
        }

        .cursor-text {
            cursor: text
        }

        .block {
            display: block
        }

        .flex {
            display: flex
        }

        .hidden {
            display: none
        }

        .flex-row {
            flex-direction: row
        }

        .flex-col {
            flex-direction: column
        }

        .items-start {
            align-items: flex-start
        }

        .items-center {
            align-items: center
        }

        .justify-start {
            justify-content: flex-start
        }

        .justify-center {
            justify-content: center
        }

        .content-center {
            align-content: center
        }

        .content-start {
            align-content: flex-start
        }

        .flex-1 {
            flex: 1 1 0%
        }

        .flex-initial {
            flex: 0 1 auto
        }

        .flex-none {
            flex: none
        }

        .flex-shrink-0 {
            flex-shrink: 0
        }

        .flex-shrink {
            flex-shrink: 1
        }

        .font-gordita {
            font-family: Gordita, Helvetica Neue, Helvetica, Arial, sans-serif
        }

        .font-medium {
            font-weight: 500
        }

        .h-0 {
            height: 0
        }

        .h-full {
            height: 100%
        }

        .leading-none {
            line-height: 1
        }

        .leading-tight {
            line-height: 1.3
        }

        .leading-normal {
            line-height: 1.5
        }

        .m-0 {
            margin: 0
        }

        .m-1 {
            margin: .2rem
        }

        .m-2 {
            margin: .4rem
        }

        .m-3 {
            margin: .8rem
        }

        .m-4 {
            margin: 1.6rem
        }

        .m-5 {
            margin: 3.2rem
        }

        .m-6 {
            margin: 6.4rem
        }

        .m-7 {
            margin: 12.8rem
        }

        .m-8 {
            margin: 25.6rem
        }

        .-m-1 {
            margin: -.2rem
        }

        .-m-2 {
            margin: -.4rem
        }

        .-m-3 {
            margin: -.8rem
        }

        .-m-4 {
            margin: -1.6rem
        }

        .-m-5 {
            margin: -3.2rem
        }

        .-m-6 {
            margin: -6.4rem
        }

        .-m-7 {
            margin: -12.8rem
        }

        .-m-8 {
            margin: -25.6rem
        }

        .my-0 {
            margin-top: 0;
            margin-bottom: 0
        }

        .mx-0 {
            margin-left: 0;
            margin-right: 0
        }

        .my-1 {
            margin-top: .2rem;
            margin-bottom: .2rem
        }

        .mx-1 {
            margin-left: .2rem;
            margin-right: .2rem
        }

        .my-2 {
            margin-top: .4rem;
            margin-bottom: .4rem
        }

        .mx-2 {
            margin-left: .4rem;
            margin-right: .4rem
        }

        .my-3 {
            margin-top: .8rem;
            margin-bottom: .8rem
        }

        .mx-3 {
            margin-left: .8rem;
            margin-right: .8rem
        }

        .my-4 {
            margin-top: 1.6rem;
            margin-bottom: 1.6rem
        }

        .mx-4 {
            margin-left: 1.6rem;
            margin-right: 1.6rem
        }

        .my-5 {
            margin-top: 3.2rem;
            margin-bottom: 3.2rem
        }

        .mx-5 {
            margin-left: 3.2rem;
            margin-right: 3.2rem
        }

        .my-6 {
            margin-top: 6.4rem;
            margin-bottom: 6.4rem
        }

        .mx-6 {
            margin-left: 6.4rem;
            margin-right: 6.4rem
        }

        .my-7 {
            margin-top: 12.8rem;
            margin-bottom: 12.8rem
        }

        .mx-7 {
            margin-left: 12.8rem;
            margin-right: 12.8rem
        }

        .my-8 {
            margin-top: 25.6rem;
            margin-bottom: 25.6rem
        }

        .mx-8 {
            margin-left: 25.6rem;
            margin-right: 25.6rem
        }

        .-my-1 {
            margin-top: -.2rem;
            margin-bottom: -.2rem
        }

        .-mx-1 {
            margin-left: -.2rem;
            margin-right: -.2rem
        }

        .-my-2 {
            margin-top: -.4rem;
            margin-bottom: -.4rem
        }

        .-mx-2 {
            margin-left: -.4rem;
            margin-right: -.4rem
        }

        .-my-3 {
            margin-top: -.8rem;
            margin-bottom: -.8rem
        }

        .-mx-3 {
            margin-left: -.8rem;
            margin-right: -.8rem
        }

        .-my-4 {
            margin-top: -1.6rem;
            margin-bottom: -1.6rem
        }

        .-mx-4 {
            margin-left: -1.6rem;
            margin-right: -1.6rem
        }

        .-my-5 {
            margin-top: -3.2rem;
            margin-bottom: -3.2rem
        }

        .-mx-5 {
            margin-left: -3.2rem;
            margin-right: -3.2rem
        }

        .-my-6 {
            margin-top: -6.4rem;
            margin-bottom: -6.4rem
        }

        .-mx-6 {
            margin-left: -6.4rem;
            margin-right: -6.4rem
        }

        .-my-7 {
            margin-top: -12.8rem;
            margin-bottom: -12.8rem
        }

        .-mx-7 {
            margin-left: -12.8rem;
            margin-right: -12.8rem
        }

        .-my-8 {
            margin-top: -25.6rem;
            margin-bottom: -25.6rem
        }

        .-mx-8 {
            margin-left: -25.6rem;
            margin-right: -25.6rem
        }

        .mt-0 {
            margin-top: 0
        }

        .mr-0 {
            margin-right: 0
        }

        .mb-0 {
            margin-bottom: 0
        }

        .ml-0 {
            margin-left: 0
        }

        .mt-1 {
            margin-top: .2rem
        }

        .mr-1 {
            margin-right: .2rem
        }

        .mb-1 {
            margin-bottom: .2rem
        }

        .ml-1 {
            margin-left: .2rem
        }

        .mt-2 {
            margin-top: .4rem
        }

        .mr-2 {
            margin-right: .4rem
        }

        .mb-2 {
            margin-bottom: .4rem
        }

        .ml-2 {
            margin-left: .4rem
        }

        .mt-3 {
            margin-top: .8rem
        }

        .mr-3 {
            margin-right: .8rem
        }

        .mb-3 {
            margin-bottom: .8rem
        }

        .ml-3 {
            margin-left: .8rem
        }

        .mt-4 {
            margin-top: 1.6rem
        }

        .mr-4 {
            margin-right: 1.6rem
        }

        .mb-4 {
            margin-bottom: 1.6rem
        }

        .ml-4 {
            margin-left: 1.6rem
        }

        .mt-5 {
            margin-top: 3.2rem
        }

        .mr-5 {
            margin-right: 3.2rem
        }

        .mb-5 {
            margin-bottom: 3.2rem
        }

        .ml-5 {
            margin-left: 3.2rem
        }

        .mt-6 {
            margin-top: 6.4rem
        }

        .mr-6 {
            margin-right: 6.4rem
        }

        .mb-6 {
            margin-bottom: 6.4rem
        }

        .ml-6 {
            margin-left: 6.4rem
        }

        .mt-7 {
            margin-top: 12.8rem
        }

        .mr-7 {
            margin-right: 12.8rem
        }

        .mb-7 {
            margin-bottom: 12.8rem
        }

        .ml-7 {
            margin-left: 12.8rem
        }

        .mt-8 {
            margin-top: 25.6rem
        }

        .mr-8 {
            margin-right: 25.6rem
        }

        .mb-8 {
            margin-bottom: 25.6rem
        }

        .ml-8 {
            margin-left: 25.6rem
        }

        .-mt-1 {
            margin-top: -.2rem
        }

        .-mr-1 {
            margin-right: -.2rem
        }

        .-mb-1 {
            margin-bottom: -.2rem
        }

        .-ml-1 {
            margin-left: -.2rem
        }

        .-mt-2 {
            margin-top: -.4rem
        }

        .-mr-2 {
            margin-right: -.4rem
        }

        .-mb-2 {
            margin-bottom: -.4rem
        }

        .-ml-2 {
            margin-left: -.4rem
        }

        .-mt-3 {
            margin-top: -.8rem
        }

        .-mr-3 {
            margin-right: -.8rem
        }

        .-mb-3 {
            margin-bottom: -.8rem
        }

        .-ml-3 {
            margin-left: -.8rem
        }

        .-mt-4 {
            margin-top: -1.6rem
        }

        .-mr-4 {
            margin-right: -1.6rem
        }

        .-mb-4 {
            margin-bottom: -1.6rem
        }

        .-ml-4 {
            margin-left: -1.6rem
        }

        .-mt-5 {
            margin-top: -3.2rem
        }

        .-mr-5 {
            margin-right: -3.2rem
        }

        .-mb-5 {
            margin-bottom: -3.2rem
        }

        .-ml-5 {
            margin-left: -3.2rem
        }

        .-mt-6 {
            margin-top: -6.4rem
        }

        .-mr-6 {
            margin-right: -6.4rem
        }

        .-mb-6 {
            margin-bottom: -6.4rem
        }

        .-ml-6 {
            margin-left: -6.4rem
        }

        .-mt-7 {
            margin-top: -12.8rem
        }

        .-mr-7 {
            margin-right: -12.8rem
        }

        .-mb-7 {
            margin-bottom: -12.8rem
        }

        .-ml-7 {
            margin-left: -12.8rem
        }

        .-mt-8 {
            margin-top: -25.6rem
        }

        .-mr-8 {
            margin-right: -25.6rem
        }

        .-mb-8 {
            margin-bottom: -25.6rem
        }

        .-ml-8 {
            margin-left: -25.6rem
        }

        .min-w-0 {
            min-width: 0
        }

        .opacity-0 {
            opacity: 0
        }

        .opacity-25 {
            opacity: .25
        }

        .opacity-50 {
            opacity: .5
        }

        .opacity-75 {
            opacity: .75
        }

        .opacity-100 {
            opacity: 1
        }

        .hover\:opacity-0:hover {
            opacity: 0
        }

        .hover\:opacity-25:hover {
            opacity: .25
        }

        .hover\:opacity-50:hover {
            opacity: .5
        }

        .hover\:opacity-75:hover {
            opacity: .75
        }

        .hover\:opacity-100:hover {
            opacity: 1
        }

        .focus\:outline-none:focus,
        .outline-none {
            outline: 0
        }

        .p-0 {
            padding: 0
        }

        .p-1 {
            padding: .2rem
        }

        .p-2 {
            padding: .4rem
        }

        .p-3 {
            padding: .8rem
        }

        .p-4 {
            padding: 1.6rem
        }

        .p-5 {
            padding: 3.2rem
        }

        .p-6 {
            padding: 6.4rem
        }

        .p-7 {
            padding: 12.8rem
        }

        .p-8 {
            padding: 25.6rem
        }

        .py-0 {
            padding-top: 0;
            padding-bottom: 0
        }

        .py-1 {
            padding-top: .2rem;
            padding-bottom: .2rem
        }

        .py-2 {
            padding-top: .4rem;
            padding-bottom: .4rem
        }

        .py-3 {
            padding-top: .8rem;
            padding-bottom: .8rem
        }

        .py-4 {
            padding-top: 1.6rem;
            padding-bottom: 1.6rem
        }

        .py-5 {
            padding-top: 3.2rem;
            padding-bottom: 3.2rem
        }

        .py-6 {
            padding-top: 6.4rem;
            padding-bottom: 6.4rem
        }

        .py-7 {
            padding-top: 12.8rem;
            padding-bottom: 12.8rem
        }

        .py-8 {
            padding-top: 25.6rem;
            padding-bottom: 25.6rem
        }

        .pt-0 {
            padding-top: 0
        }

        .pb-0 {
            padding-bottom: 0
        }

        .pt-1 {
            padding-top: .2rem
        }

        .pb-1 {
            padding-bottom: .2rem
        }

        .pt-2 {
            padding-top: .4rem
        }

        .pb-2 {
            padding-bottom: .4rem
        }

        .pt-3 {
            padding-top: .8rem
        }

        .pb-3 {
            padding-bottom: .8rem
        }

        .pt-4 {
            padding-top: 1.6rem
        }

        .pb-4 {
            padding-bottom: 1.6rem
        }

        .pt-5 {
            padding-top: 3.2rem
        }

        .pb-5 {
            padding-bottom: 3.2rem
        }

        .pt-6 {
            padding-top: 6.4rem
        }

        .pb-6 {
            padding-bottom: 6.4rem
        }

        .pt-7 {
            padding-top: 12.8rem
        }

        .pb-7 {
            padding-bottom: 12.8rem
        }

        .pt-8 {
            padding-top: 25.6rem
        }

        .pb-8 {
            padding-bottom: 25.6rem
        }

        .absolute {
            position: absolute
        }

        .bottom-0 {
            bottom: 0
        }

        .left-0 {
            left: 0
        }

        .hover\:shadow-1:hover {
            box-shadow: 0 0 0 1px rgba(56, 60, 67, .05), 0 1px 3px 0 rgba(56, 60, 67, .15)
        }

        .hover\:shadow-2:hover {
            box-shadow: 0 0 0 1px rgba(56, 60, 67, .07), 0 3px 6px 0 rgba(56, 60, 67, .15)
        }

        .hover\:shadow-3:hover {
            box-shadow: 0 0 0 1px rgba(56, 60, 67, .07), 0 8px 14px 1px rgba(56, 60, 67, .15)
        }

        .hover\:shadow-4:hover {
            box-shadow: 0 0 0 1px rgba(56, 60, 67, .07), 0 15px 20px 1px rgba(56, 60, 67, .12)
        }

        .hover\:shadow-none:hover {
            box-shadow: none
        }

        .text-left {
            text-align: left
        }

        .text-center {
            text-align: center
        }

        .text-justify {
            text-align: justify
        }

        .text-black {
            color: #151922
        }

        .text-grey-darkest {
            color: #383c43
        }

        .text-grey-dark {
            color: #8a8c91
        }

        .text-grey {
            color: #b9babd
        }

        .text-grey-lightest {
            color: #f8f8f8
        }

        .text-white {
            color: #fff
        }

        .text-blue-darkest {
            color: #0e1b33
        }

        .text-blue-dark {
            color: #305eb2
        }

        .text-blue {
            color: #4687ff
        }

        .text-blue-lightest {
            color: #edf3ff
        }

        .text-red-darkest {
            color: #850a1b
        }

        .text-red-dark {
            color: #d2283e
        }

        .text-red {
            color: #f64f64
        }

        .text-red-lightest {
            color: #ffe4e8
        }

        .hover\:text-transparent:hover {
            color: transparent
        }

        .hover\:text-black:hover {
            color: #151922
        }

        .hover\:text-grey-darkest:hover {
            color: #383c43
        }

        .hover\:text-grey-darker:hover {
            color: #44474e
        }

        .hover\:text-grey-dark:hover {
            color: #8a8c91
        }

        .hover\:text-grey:hover {
            color: #b9babd
        }

        .hover\:text-grey-light:hover {
            color: #d0d1d3
        }

        .hover\:text-grey-lighter:hover {
            color: #e8e8e9
        }

        .hover\:text-grey-lightest:hover {
            color: #f8f8f8
        }

        .hover\:text-white:hover {
            color: #fff
        }

        .hover\:text-blue-darkest:hover {
            color: #0e1b33
        }

        .hover\:text-blue-darker:hover {
            color: #233b67
        }

        .hover\:text-blue-dark:hover {
            color: #305eb2
        }

        .hover\:text-blue:hover {
            color: #4687ff
        }

        .hover\:text-blue-light:hover {
            color: #77a7ff
        }

        .hover\:text-blue-lighter:hover {
            color: #bdd4ff
        }

        .hover\:text-blue-lightest:hover {
            color: #edf3ff
        }

        .hover\:text-red-darkest:hover {
            color: #850a1b
        }

        .hover\:text-red-darker:hover {
            color: #ad1127
        }

        .hover\:text-red-dark:hover {
            color: #d2283e
        }

        .hover\:text-red:hover {
            color: #f64f64
        }

        .hover\:text-red-light:hover {
            color: #f86e80
        }

        .hover\:text-red-lighter:hover {
            color: #ffa9b4
        }

        .hover\:text-red-lightest:hover {
            color: #ffe4e8
        }

        .hover\:text-purple-darkest:hover {
            color: #1e232a
        }

        .hover\:text-purple-darker:hover {
            color: #393944
        }

        .hover\:text-purple-dark:hover {
            color: #565378
        }

        .hover\:text-purple:hover {
            color: #7f7aee
        }

        .hover\:text-purple-light:hover {
            color: #b8b5f3
        }

        .hover\:text-purple-lighter:hover {
            color: #dddcfb
        }

        .hover\:text-purple-lightest:hover {
            color: #f8f8fe
        }

        .hover\:text-pink-darkest:hover {
            color: #642634
        }

        .hover\:text-pink-darker:hover {
            color: #95394f
        }

        .hover\:text-pink-dark:hover {
            color: #c74c69
        }

        .hover\:text-pink:hover {
            color: #f95f83
        }

        .hover\:text-pink-light:hover {
            color: #fb8fa8
        }

        .hover\:text-pink-lighter:hover {
            color: #fdbfcd
        }

        .hover\:text-pink-lightest:hover {
            color: #feeff3
        }

        .hover\:text-orange-darkest:hover {
            color: #4e2202
        }

        .hover\:text-orange-darker:hover {
            color: #8f420b
        }

        .hover\:text-orange-dark:hover {
            color: #d86412
        }

        .hover\:text-orange:hover {
            color: #ff7e23
        }

        .hover\:text-orange-light:hover {
            color: #ffaa6e
        }

        .hover\:text-orange-lighter:hover {
            color: #ffcba7
        }

        .hover\:text-orange-lightest:hover {
            color: #fff2e9
        }

        .hover\:text-green-darkest:hover {
            color: #13341d
        }

        .hover\:text-green-darker:hover {
            color: #1d6032
        }

        .hover\:text-green-dark:hover {
            color: #259a49
        }

        .hover\:text-green:hover {
            color: #27be56
        }

        .hover\:text-green-light:hover {
            color: #66d589
        }

        .hover\:text-green-lighter:hover {
            color: #aee9c0
        }

        .hover\:text-green-lightest:hover {
            color: #e9f9ee
        }

        .hover\:text-teal-darkest:hover {
            color: #163635
        }

        .hover\:text-teal-darker:hover {
            color: #255b58
        }

        .hover\:text-teal-dark:hover {
            color: #347f7c
        }

        .hover\:text-teal:hover {
            color: #43a5a1
        }

        .hover\:text-teal-light:hover {
            color: #80cbc8
        }

        .hover\:text-teal-lighter:hover {
            color: #c9e9e8
        }

        .hover\:text-teal-lightest:hover {
            color: #edf8f7
        }

        .text-small {
            font-size: calc(13px + (100vw - 320px)/ 880)
        }

        @media screen and (min-width:1200px) {
            .text-small {
                font-size: 14px
            }
        }

        @media screen and (max-width:320px) {
            .text-small {
                font-size: 13px
            }
        }

        .text-base {
            font-size: calc(15px + (100vw - 320px)/ 880)
        }

        @media screen and (min-width:1200px) {
            .text-base {
                font-size: 16px
            }
        }

        @media screen and (max-width:320px) {
            .text-base {
                font-size: 15px
            }
        }

        .text-h6 {
            font-size: 1.46rem
        }

        .text-h5 {
            font-size: 1.86rem
        }

        .text-h4 {
            font-size: 2.13rem
        }

        .text-h3 {
            font-size: 2.6rem
        }

        .text-h2 {
            font-size: 3.2rem
        }

        .text-h1 {
            font-size: 4.26rem
        }

        .tracking-tight {
            letter-spacing: -.5px
        }

        .tracking-normal {
            letter-spacing: 0
        }

        .select-none {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none
        }

        .select-text {
            -webkit-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text
        }

        .select-all {
            -webkit-user-select: all;
            -moz-user-select: all;
            -ms-user-select: all;
            user-select: all
        }

        .align-bottom {
            vertical-align: bottom
        }

        .align-text-bottom {
            vertical-align: text-bottom
        }

        .break-normal {
            overflow-wrap: normal;
            word-break: normal
        }

        .break-all {
            word-break: break-all
        }

        .w-0 {
            width: 0
        }

        .w-full {
            width: 100%
        }

        .z-0 {
            z-index: 0
        }

        .z-1 {
            z-index: 1
        }

        .z-10 {
            z-index: 10
        }

        .z-9999 {
            z-index: 9999
        }

        .col-span-1 {
            grid-column: span 1/span 1
        }

        .col-span-2 {
            grid-column: span 2/span 2
        }

        .col-span-3 {
            grid-column: span 3/span 3
        }

        .col-span-4 {
            grid-column: span 4/span 4
        }

        .col-span-5 {
            grid-column: span 5/span 5
        }

        .col-span-6 {
            grid-column: span 6/span 6
        }

        .col-span-7 {
            grid-column: span 7/span 7
        }

        .col-span-8 {
            grid-column: span 8/span 8
        }

        .col-span-9 {
            grid-column: span 9/span 9
        }

        .col-span-10 {
            grid-column: span 10/span 10
        }

        .col-span-11 {
            grid-column: span 11/span 11
        }

        .col-span-12 {
            grid-column: span 12/span 12
        }

        .col-start-1 {
            grid-column-start: 1
        }

        .col-start-2 {
            grid-column-start: 2
        }

        .col-start-3 {
            grid-column-start: 3
        }

        .col-start-4 {
            grid-column-start: 4
        }

        .col-start-5 {
            grid-column-start: 5
        }

        .col-start-6 {
            grid-column-start: 6
        }

        .col-start-7 {
            grid-column-start: 7
        }

        .col-start-8 {
            grid-column-start: 8
        }

        .col-start-9 {
            grid-column-start: 9
        }

        .col-start-10 {
            grid-column-start: 10
        }

        .col-start-11 {
            grid-column-start: 11
        }

        .col-start-12 {
            grid-column-start: 12
        }

        .col-start-13 {
            grid-column-start: 13
        }

        .row-span-1 {
            grid-row: span 1/span 1
        }

        .row-span-2 {
            grid-row: span 2/span 2
        }

        .row-span-3 {
            grid-row: span 3/span 3
        }

        .row-span-4 {
            grid-row: span 4/span 4
        }

        .row-span-5 {
            grid-row: span 5/span 5
        }

        .row-span-6 {
            grid-row: span 6/span 6
        }

        .row-start-1 {
            grid-row-start: 1
        }

        .row-start-2 {
            grid-row-start: 2
        }

        .row-start-3 {
            grid-row-start: 3
        }

        .row-start-4 {
            grid-row-start: 4
        }

        .row-start-5 {
            grid-row-start: 5
        }

        .row-start-6 {
            grid-row-start: 6
        }

        .row-start-7 {
            grid-row-start: 7
        }

        .hover\:rotate-0:hover {
            --transform-rotate: 0
        }

        .hover\:rotate-45:hover {
            --transform-rotate: 45deg
        }

        .hover\:rotate-90:hover {
            --transform-rotate: 90deg
        }

        .hover\:rotate-180:hover {
            --transform-rotate: 180deg
        }

        .hover\:-rotate-180:hover {
            --transform-rotate: -180deg
        }

        .hover\:-rotate-90:hover {
            --transform-rotate: -90deg
        }

        .hover\:-rotate-45:hover {
            --transform-rotate: -45deg
        }

        .focus\:rotate-0:focus {
            --transform-rotate: 0
        }

        .focus\:rotate-45:focus {
            --transform-rotate: 45deg
        }

        .focus\:rotate-90:focus {
            --transform-rotate: 90deg
        }

        .focus\:rotate-180:focus {
            --transform-rotate: 180deg
        }

        .focus\:-rotate-180:focus {
            --transform-rotate: -180deg
        }

        .focus\:-rotate-90:focus {
            --transform-rotate: -90deg
        }

        .focus\:-rotate-45:focus {
            --transform-rotate: -45deg
        }

        .hover\:translate-x-0:hover {
            --transform-translate-x: 0
        }

        .hover\:translate-x-1:hover {
            --transform-translate-x: 0.2rem
        }

        .hover\:translate-x-2:hover {
            --transform-translate-x: 0.4rem
        }

        .hover\:translate-x-3:hover {
            --transform-translate-x: 0.8rem
        }

        .hover\:translate-x-4:hover {
            --transform-translate-x: 1.6rem
        }

        .hover\:translate-x-5:hover {
            --transform-translate-x: 3.2rem
        }

        .hover\:translate-x-6:hover {
            --transform-translate-x: 6.4rem
        }

        .hover\:translate-x-7:hover {
            --transform-translate-x: 12.8rem
        }

        .hover\:translate-x-8:hover {
            --transform-translate-x: 25.6rem
        }

        .hover\:translate-x-auto:hover {
            --transform-translate-x: auto
        }

        .hover\:translate-x-px:hover {
            --transform-translate-x: 1px
        }

        .hover\:-translate-x-1:hover {
            --transform-translate-x: -0.2rem
        }

        .hover\:-translate-x-2:hover {
            --transform-translate-x: -0.4rem
        }

        .hover\:-translate-x-3:hover {
            --transform-translate-x: -0.8rem
        }

        .hover\:-translate-x-4:hover {
            --transform-translate-x: -1.6rem
        }

        .hover\:-translate-x-5:hover {
            --transform-translate-x: -3.2rem
        }

        .hover\:-translate-x-6:hover {
            --transform-translate-x: -6.4rem
        }

        .hover\:-translate-x-7:hover {
            --transform-translate-x: -12.8rem
        }

        .hover\:-translate-x-8:hover {
            --transform-translate-x: -25.6rem
        }

        .hover\:-translate-x-auto:hover {
            --transform-translate-x: auto
        }

        .hover\:-translate-x-px:hover {
            --transform-translate-x: -1px
        }

        .hover\:-translate-x-full:hover {
            --transform-translate-x: -100%
        }

        .hover\:-translate-x-1\/2:hover {
            --transform-translate-x: -50%
        }

        .hover\:translate-x-1\/2:hover {
            --transform-translate-x: 50%
        }

        .hover\:translate-x-full:hover {
            --transform-translate-x: 100%
        }

        .hover\:translate-y-0:hover {
            --transform-translate-y: 0
        }

        .hover\:translate-y-1:hover {
            --transform-translate-y: 0.2rem
        }

        .hover\:translate-y-2:hover {
            --transform-translate-y: 0.4rem
        }

        .hover\:translate-y-3:hover {
            --transform-translate-y: 0.8rem
        }

        .hover\:translate-y-4:hover {
            --transform-translate-y: 1.6rem
        }

        .hover\:translate-y-5:hover {
            --transform-translate-y: 3.2rem
        }

        .hover\:translate-y-6:hover {
            --transform-translate-y: 6.4rem
        }

        .hover\:translate-y-7:hover {
            --transform-translate-y: 12.8rem
        }

        .hover\:translate-y-8:hover {
            --transform-translate-y: 25.6rem
        }

        .hover\:translate-y-auto:hover {
            --transform-translate-y: auto
        }

        .hover\:translate-y-px:hover {
            --transform-translate-y: 1px
        }

        .hover\:-translate-y-1:hover {
            --transform-translate-y: -0.2rem
        }

        .hover\:-translate-y-2:hover {
            --transform-translate-y: -0.4rem
        }

        .hover\:-translate-y-3:hover {
            --transform-translate-y: -0.8rem
        }

        .hover\:-translate-y-4:hover {
            --transform-translate-y: -1.6rem
        }

        .hover\:-translate-y-5:hover {
            --transform-translate-y: -3.2rem
        }

        .hover\:-translate-y-6:hover {
            --transform-translate-y: -6.4rem
        }

        .hover\:-translate-y-7:hover {
            --transform-translate-y: -12.8rem
        }

        .hover\:-translate-y-8:hover {
            --transform-translate-y: -25.6rem
        }

        .hover\:-translate-y-auto:hover {
            --transform-translate-y: auto
        }

        .hover\:-translate-y-px:hover {
            --transform-translate-y: -1px
        }

        .hover\:-translate-y-full:hover {
            --transform-translate-y: -100%
        }

        .hover\:-translate-y-1\/2:hover {
            --transform-translate-y: -50%
        }

        .hover\:translate-y-1\/2:hover {
            --transform-translate-y: 50%
        }

        .hover\:translate-y-full:hover {
            --transform-translate-y: 100%
        }

        .focus\:translate-x-0:focus {
            --transform-translate-x: 0
        }

        .focus\:translate-x-1:focus {
            --transform-translate-x: 0.2rem
        }

        .focus\:translate-x-2:focus {
            --transform-translate-x: 0.4rem
        }

        .focus\:translate-x-3:focus {
            --transform-translate-x: 0.8rem
        }

        .focus\:translate-x-4:focus {
            --transform-translate-x: 1.6rem
        }

        .focus\:translate-x-5:focus {
            --transform-translate-x: 3.2rem
        }

        .focus\:translate-x-6:focus {
            --transform-translate-x: 6.4rem
        }

        .focus\:translate-x-7:focus {
            --transform-translate-x: 12.8rem
        }

        .focus\:translate-x-8:focus {
            --transform-translate-x: 25.6rem
        }

        .focus\:translate-x-auto:focus {
            --transform-translate-x: auto
        }

        .focus\:translate-x-px:focus {
            --transform-translate-x: 1px
        }

        .focus\:-translate-x-1:focus {
            --transform-translate-x: -0.2rem
        }

        .focus\:-translate-x-2:focus {
            --transform-translate-x: -0.4rem
        }

        .focus\:-translate-x-3:focus {
            --transform-translate-x: -0.8rem
        }

        .focus\:-translate-x-4:focus {
            --transform-translate-x: -1.6rem
        }

        .focus\:-translate-x-5:focus {
            --transform-translate-x: -3.2rem
        }

        .focus\:-translate-x-6:focus {
            --transform-translate-x: -6.4rem
        }

        .focus\:-translate-x-7:focus {
            --transform-translate-x: -12.8rem
        }

        .focus\:-translate-x-8:focus {
            --transform-translate-x: -25.6rem
        }

        .focus\:-translate-x-auto:focus {
            --transform-translate-x: auto
        }

        .focus\:-translate-x-px:focus {
            --transform-translate-x: -1px
        }

        .focus\:-translate-x-full:focus {
            --transform-translate-x: -100%
        }

        .focus\:-translate-x-1\/2:focus {
            --transform-translate-x: -50%
        }

        .focus\:translate-x-1\/2:focus {
            --transform-translate-x: 50%
        }

        .focus\:translate-x-full:focus {
            --transform-translate-x: 100%
        }

        .focus\:translate-y-0:focus {
            --transform-translate-y: 0
        }

        .focus\:translate-y-1:focus {
            --transform-translate-y: 0.2rem
        }

        .focus\:translate-y-2:focus {
            --transform-translate-y: 0.4rem
        }

        .focus\:translate-y-3:focus {
            --transform-translate-y: 0.8rem
        }

        .focus\:translate-y-4:focus {
            --transform-translate-y: 1.6rem
        }

        .focus\:translate-y-5:focus {
            --transform-translate-y: 3.2rem
        }

        .focus\:translate-y-6:focus {
            --transform-translate-y: 6.4rem
        }

        .focus\:translate-y-7:focus {
            --transform-translate-y: 12.8rem
        }

        .focus\:translate-y-8:focus {
            --transform-translate-y: 25.6rem
        }

        .focus\:translate-y-auto:focus {
            --transform-translate-y: auto
        }

        .focus\:translate-y-px:focus {
            --transform-translate-y: 1px
        }

        .focus\:-translate-y-1:focus {
            --transform-translate-y: -0.2rem
        }

        .focus\:-translate-y-2:focus {
            --transform-translate-y: -0.4rem
        }

        .focus\:-translate-y-3:focus {
            --transform-translate-y: -0.8rem
        }

        .focus\:-translate-y-4:focus {
            --transform-translate-y: -1.6rem
        }

        .focus\:-translate-y-5:focus {
            --transform-translate-y: -3.2rem
        }

        .focus\:-translate-y-6:focus {
            --transform-translate-y: -6.4rem
        }

        .focus\:-translate-y-7:focus {
            --transform-translate-y: -12.8rem
        }

        .focus\:-translate-y-8:focus {
            --transform-translate-y: -25.6rem
        }

        .focus\:-translate-y-auto:focus {
            --transform-translate-y: auto
        }

        .focus\:-translate-y-px:focus {
            --transform-translate-y: -1px
        }

        .focus\:-translate-y-full:focus {
            --transform-translate-y: -100%
        }

        .focus\:-translate-y-1\/2:focus {
            --transform-translate-y: -50%
        }

        .focus\:translate-y-1\/2:focus {
            --transform-translate-y: 50%
        }

        .focus\:translate-y-full:focus {
            --transform-translate-y: 100%
        }

        .hover\:skew-x-0:hover {
            --transform-skew-x: 0
        }

        .hover\:skew-x-3:hover {
            --transform-skew-x: 3deg
        }

        .hover\:skew-x-6:hover {
            --transform-skew-x: 6deg
        }

        .hover\:skew-x-12:hover {
            --transform-skew-x: 12deg
        }

        .hover\:-skew-x-12:hover {
            --transform-skew-x: -12deg
        }

        .hover\:-skew-x-6:hover {
            --transform-skew-x: -6deg
        }

        .hover\:-skew-x-3:hover {
            --transform-skew-x: -3deg
        }

        .hover\:skew-y-0:hover {
            --transform-skew-y: 0
        }

        .hover\:skew-y-3:hover {
            --transform-skew-y: 3deg
        }

        .hover\:skew-y-6:hover {
            --transform-skew-y: 6deg
        }

        .hover\:skew-y-12:hover {
            --transform-skew-y: 12deg
        }

        .hover\:-skew-y-12:hover {
            --transform-skew-y: -12deg
        }

        .hover\:-skew-y-6:hover {
            --transform-skew-y: -6deg
        }

        .hover\:-skew-y-3:hover {
            --transform-skew-y: -3deg
        }

        .focus\:skew-x-0:focus {
            --transform-skew-x: 0
        }

        .focus\:skew-x-3:focus {
            --transform-skew-x: 3deg
        }

        .focus\:skew-x-6:focus {
            --transform-skew-x: 6deg
        }

        .focus\:skew-x-12:focus {
            --transform-skew-x: 12deg
        }

        .focus\:-skew-x-12:focus {
            --transform-skew-x: -12deg
        }

        .focus\:-skew-x-6:focus {
            --transform-skew-x: -6deg
        }

        .focus\:-skew-x-3:focus {
            --transform-skew-x: -3deg
        }

        .focus\:skew-y-0:focus {
            --transform-skew-y: 0
        }

        .focus\:skew-y-3:focus {
            --transform-skew-y: 3deg
        }

        .focus\:skew-y-6:focus {
            --transform-skew-y: 6deg
        }

        .focus\:skew-y-12:focus {
            --transform-skew-y: 12deg
        }

        .focus\:-skew-y-12:focus {
            --transform-skew-y: -12deg
        }

        .focus\:-skew-y-6:focus {
            --transform-skew-y: -6deg
        }

        .focus\:-skew-y-3:focus {
            --transform-skew-y: -3deg
        }

        .transition-all {
            transition-property: all
        }

        .transition-none {
            transition-property: none
        }

        .transition-colors {
            transition-property: background-color, border-color, color, fill, stroke
        }

        .transition-border {
            transition-property: border
        }

        .transition-opacity {
            transition-property: opacity
        }

        .ease-in {
            transition-timing-function: cubic-bezier(.4, 0, 1, 1)
        }

        .ease-out {
            transition-timing-function: cubic-bezier(0, 0, .2, 1)
        }

        .ease-in-out {
            transition-timing-function: cubic-bezier(.4, 0, .2, 1)
        }

        .duration-250 {
            transition-duration: .25s
        }

        .row {
            display: flex;
            flex-wrap: wrap;
            margin-left: -16px;
            margin-right: -16px
        }

        .col,
        .col-1,
        .col-10,
        .col-11,
        .col-12,
        .col-2,
        .col-3,
        .col-4,
        .col-5,
        .col-6,
        .col-7,
        .col-8,
        .col-9,
        .lg\:col,
        .lg\:col-1,
        .lg\:col-10,
        .lg\:col-11,
        .lg\:col-12,
        .lg\:col-2,
        .lg\:col-3,
        .lg\:col-4,
        .lg\:col-5,
        .lg\:col-6,
        .lg\:col-7,
        .lg\:col-8,
        .lg\:col-9,
        .lg\:col-auto,
        .sm\:col,
        .sm\:col-1,
        .sm\:col-10,
        .sm\:col-11,
        .sm\:col-12,
        .sm\:col-2,
        .sm\:col-3,
        .sm\:col-4,
        .sm\:col-5,
        .sm\:col-6,
        .sm\:col-7,
        .sm\:col-8,
        .sm\:col-9,
        .sm\:col-auto {
            position: relative;
            width: 100%;
            padding-right: 16px;
            padding-left: 16px
        }

        .col {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%
        }

        .col-1 {
            flex: 0 0 8.333333333333334%;
            max-width: 8.333333333333334%
        }

        .col-2 {
            flex: 0 0 16.666666666666668%;
            max-width: 16.666666666666668%
        }

        .col-3 {
            flex: 0 0 25%;
            max-width: 25%
        }

        .col-4 {
            flex: 0 0 33.333333333333336%;
            max-width: 33.333333333333336%
        }

        .col-5 {
            flex: 0 0 41.66666666666667%;
            max-width: 41.66666666666667%
        }

        .col-6 {
            flex: 0 0 50%;
            max-width: 50%
        }

        .col-7 {
            flex: 0 0 58.333333333333336%;
            max-width: 58.333333333333336%
        }

        .col-8 {
            flex: 0 0 66.66666666666667%;
            max-width: 66.66666666666667%
        }

        .col-9 {
            flex: 0 0 75%;
            max-width: 75%
        }

        .col-10 {
            flex: 0 0 83.33333333333334%;
            max-width: 83.33333333333334%
        }

        .col-11 {
            flex: 0 0 91.66666666666667%;
            max-width: 91.66666666666667%
        }

        .col-12 {
            flex: 0 0 100%;
            max-width: 100%
        }

        [dir=ltr] .offset-0 {
            margin-left: 0
        }

        [dir=rtl] .offset-0 {
            margin-right: 0
        }

        [dir=ltr] .offset-1 {
            margin-left: 8.333333333333334%
        }

        [dir=rtl] .offset-1 {
            margin-right: 8.333333333333334%
        }

        [dir=ltr] .offset-2 {
            margin-left: 16.666666666666668%
        }

        [dir=rtl] .offset-2 {
            margin-right: 16.666666666666668%
        }

        [dir=ltr] .offset-3 {
            margin-left: 25%
        }

        [dir=rtl] .offset-3 {
            margin-right: 25%
        }

        [dir=ltr] .offset-4 {
            margin-left: 33.333333333333336%
        }

        [dir=rtl] .offset-4 {
            margin-right: 33.333333333333336%
        }

        [dir=ltr] .offset-5 {
            margin-left: 41.66666666666667%
        }

        [dir=rtl] .offset-5 {
            margin-right: 41.66666666666667%
        }

        [dir=ltr] .offset-6 {
            margin-left: 50%
        }

        [dir=rtl] .offset-6 {
            margin-right: 50%
        }

        [dir=ltr] .offset-7 {
            margin-left: 58.333333333333336%
        }

        [dir=rtl] .offset-7 {
            margin-right: 58.333333333333336%
        }

        [dir=ltr] .offset-8 {
            margin-left: 66.66666666666667%
        }

        [dir=rtl] .offset-8 {
            margin-right: 66.66666666666667%
        }

        [dir=ltr] .offset-9 {
            margin-left: 75%
        }

        [dir=rtl] .offset-9 {
            margin-right: 75%
        }

        [dir=ltr] .offset-10 {
            margin-left: 83.33333333333334%
        }

        [dir=rtl] .offset-10 {
            margin-right: 83.33333333333334%
        }

        [dir=ltr] .offset-11 {
            margin-left: 91.66666666666667%
        }

        [dir=rtl] .offset-11 {
            margin-right: 91.66666666666667%
        }

        @media (min-width:576px) {
            .sm\:block {
                display: block
            }

            .sm\:inline-block {
                display: inline-block
            }

            .sm\:inline {
                display: inline
            }

            .sm\:flex {
                display: flex
            }

            .sm\:inline-flex {
                display: inline-flex
            }

            .sm\:grid {
                display: grid
            }

            .sm\:table {
                display: table
            }

            .sm\:table-caption {
                display: table-caption
            }

            .sm\:table-cell {
                display: table-cell
            }

            .sm\:table-column {
                display: table-column
            }

            .sm\:table-column-group {
                display: table-column-group
            }

            .sm\:table-footer-group {
                display: table-footer-group
            }

            .sm\:table-header-group {
                display: table-header-group
            }

            .sm\:table-row-group {
                display: table-row-group
            }

            .sm\:table-row {
                display: table-row
            }

            .sm\:hidden {
                display: none
            }

            .sm\:flex-row {
                flex-direction: row
            }

            .sm\:flex-row-reverse {
                flex-direction: row-reverse
            }

            .sm\:flex-col {
                flex-direction: column
            }

            .sm\:flex-col-reverse {
                flex-direction: column-reverse
            }

            .sm\:flex-wrap {
                flex-wrap: wrap
            }

            .sm\:flex-wrap-reverse {
                flex-wrap: wrap-reverse
            }

            .sm\:flex-no-wrap {
                flex-wrap: nowrap
            }

            .sm\:items-start {
                align-items: flex-start
            }

            .sm\:items-end {
                align-items: flex-end
            }

            .sm\:items-center {
                align-items: center
            }

            .sm\:items-baseline {
                align-items: baseline
            }

            .sm\:items-stretch {
                align-items: stretch
            }

            .sm\:self-auto {
                align-self: auto
            }

            .sm\:self-start {
                align-self: flex-start
            }

            .sm\:self-end {
                align-self: flex-end
            }

            .sm\:self-center {
                align-self: center
            }

            .sm\:self-stretch {
                align-self: stretch
            }

            .sm\:justify-start {
                justify-content: flex-start
            }

            .sm\:justify-end {
                justify-content: flex-end
            }

            .sm\:justify-center {
                justify-content: center
            }

            .sm\:justify-between {
                justify-content: space-between
            }

            .sm\:justify-around {
                justify-content: space-around
            }

            .sm\:justify-evenly {
                justify-content: space-evenly
            }

            .sm\:content-center {
                align-content: center
            }

            .sm\:content-start {
                align-content: flex-start
            }

            .sm\:content-end {
                align-content: flex-end
            }

            .sm\:content-between {
                align-content: space-between
            }

            .sm\:content-around {
                align-content: space-around
            }

            .sm\:flex-1 {
                flex: 1 1 0%
            }

            .sm\:flex-auto {
                flex: 1 1 auto
            }

            .sm\:flex-initial {
                flex: 0 1 auto
            }

            .sm\:flex-none {
                flex: none
            }

            .sm\:flex-grow-0 {
                flex-grow: 0
            }

            .sm\:flex-grow {
                flex-grow: 1
            }

            .sm\:flex-shrink-0 {
                flex-shrink: 0
            }

            .sm\:flex-shrink {
                flex-shrink: 1
            }

            .sm\:m-0 {
                margin: 0
            }

            .sm\:m-1 {
                margin: .2rem
            }

            .sm\:m-2 {
                margin: .4rem
            }

            .sm\:m-3 {
                margin: .8rem
            }

            .sm\:m-4 {
                margin: 1.6rem
            }

            .sm\:m-5 {
                margin: 3.2rem
            }

            .sm\:m-6 {
                margin: 6.4rem
            }

            .sm\:m-7 {
                margin: 12.8rem
            }

            .sm\:m-8 {
                margin: 25.6rem
            }

            .sm\:m-auto {
                margin: auto
            }

            .sm\:m-px {
                margin: 1px
            }

            .sm\:-m-1 {
                margin: -.2rem
            }

            .sm\:-m-2 {
                margin: -.4rem
            }

            .sm\:-m-3 {
                margin: -.8rem
            }

            .sm\:-m-4 {
                margin: -1.6rem
            }

            .sm\:-m-5 {
                margin: -3.2rem
            }

            .sm\:-m-6 {
                margin: -6.4rem
            }

            .sm\:-m-7 {
                margin: -12.8rem
            }

            .sm\:-m-8 {
                margin: -25.6rem
            }

            .sm\:-m-auto {
                margin: auto
            }

            .sm\:-m-px {
                margin: -1px
            }

            .sm\:my-0 {
                margin-top: 0;
                margin-bottom: 0
            }

            .sm\:mx-0 {
                margin-left: 0;
                margin-right: 0
            }

            .sm\:my-1 {
                margin-top: .2rem;
                margin-bottom: .2rem
            }

            .sm\:mx-1 {
                margin-left: .2rem;
                margin-right: .2rem
            }

            .sm\:my-2 {
                margin-top: .4rem;
                margin-bottom: .4rem
            }

            .sm\:mx-2 {
                margin-left: .4rem;
                margin-right: .4rem
            }

            .sm\:my-3 {
                margin-top: .8rem;
                margin-bottom: .8rem
            }

            .sm\:mx-3 {
                margin-left: .8rem;
                margin-right: .8rem
            }

            .sm\:my-4 {
                margin-top: 1.6rem;
                margin-bottom: 1.6rem
            }

            .sm\:mx-4 {
                margin-left: 1.6rem;
                margin-right: 1.6rem
            }

            .sm\:my-5 {
                margin-top: 3.2rem;
                margin-bottom: 3.2rem
            }

            .sm\:mx-5 {
                margin-left: 3.2rem;
                margin-right: 3.2rem
            }

            .sm\:my-6 {
                margin-top: 6.4rem;
                margin-bottom: 6.4rem
            }

            .sm\:mx-6 {
                margin-left: 6.4rem;
                margin-right: 6.4rem
            }

            .sm\:my-7 {
                margin-top: 12.8rem;
                margin-bottom: 12.8rem
            }

            .sm\:mx-7 {
                margin-left: 12.8rem;
                margin-right: 12.8rem
            }

            .sm\:my-8 {
                margin-top: 25.6rem;
                margin-bottom: 25.6rem
            }

            .sm\:mx-8 {
                margin-left: 25.6rem;
                margin-right: 25.6rem
            }

            .sm\:my-auto {
                margin-top: auto;
                margin-bottom: auto
            }

            .sm\:mx-auto {
                margin-left: auto;
                margin-right: auto
            }

            .sm\:my-px {
                margin-top: 1px;
                margin-bottom: 1px
            }

            .sm\:mx-px {
                margin-left: 1px;
                margin-right: 1px
            }

            .sm\:-my-1 {
                margin-top: -.2rem;
                margin-bottom: -.2rem
            }

            .sm\:-mx-1 {
                margin-left: -.2rem;
                margin-right: -.2rem
            }

            .sm\:-my-2 {
                margin-top: -.4rem;
                margin-bottom: -.4rem
            }

            .sm\:-mx-2 {
                margin-left: -.4rem;
                margin-right: -.4rem
            }

            .sm\:-my-3 {
                margin-top: -.8rem;
                margin-bottom: -.8rem
            }

            .sm\:-mx-3 {
                margin-left: -.8rem;
                margin-right: -.8rem
            }

            .sm\:-my-4 {
                margin-top: -1.6rem;
                margin-bottom: -1.6rem
            }

            .sm\:-mx-4 {
                margin-left: -1.6rem;
                margin-right: -1.6rem
            }

            .sm\:-my-5 {
                margin-top: -3.2rem;
                margin-bottom: -3.2rem
            }

            .sm\:-mx-5 {
                margin-left: -3.2rem;
                margin-right: -3.2rem
            }

            .sm\:-my-6 {
                margin-top: -6.4rem;
                margin-bottom: -6.4rem
            }

            .sm\:-mx-6 {
                margin-left: -6.4rem;
                margin-right: -6.4rem
            }

            .sm\:-my-7 {
                margin-top: -12.8rem;
                margin-bottom: -12.8rem
            }

            .sm\:-mx-7 {
                margin-left: -12.8rem;
                margin-right: -12.8rem
            }

            .sm\:-my-8 {
                margin-top: -25.6rem;
                margin-bottom: -25.6rem
            }

            .sm\:-mx-8 {
                margin-left: -25.6rem;
                margin-right: -25.6rem
            }

            .sm\:-my-auto {
                margin-top: auto;
                margin-bottom: auto
            }

            .sm\:-mx-auto {
                margin-left: auto;
                margin-right: auto
            }

            .sm\:-my-px {
                margin-top: -1px;
                margin-bottom: -1px
            }

            .sm\:-mx-px {
                margin-left: -1px;
                margin-right: -1px
            }

            .sm\:mt-0 {
                margin-top: 0
            }

            .sm\:mr-0 {
                margin-right: 0
            }

            .sm\:mb-0 {
                margin-bottom: 0
            }

            .sm\:ml-0 {
                margin-left: 0
            }

            .sm\:mt-1 {
                margin-top: .2rem
            }

            .sm\:mr-1 {
                margin-right: .2rem
            }

            .sm\:mb-1 {
                margin-bottom: .2rem
            }

            .sm\:ml-1 {
                margin-left: .2rem
            }

            .sm\:mt-2 {
                margin-top: .4rem
            }

            .sm\:mr-2 {
                margin-right: .4rem
            }

            .sm\:mb-2 {
                margin-bottom: .4rem
            }

            .sm\:ml-2 {
                margin-left: .4rem
            }

            .sm\:mt-3 {
                margin-top: .8rem
            }

            .sm\:mr-3 {
                margin-right: .8rem
            }

            .sm\:mb-3 {
                margin-bottom: .8rem
            }

            .sm\:ml-3 {
                margin-left: .8rem
            }

            .sm\:mt-4 {
                margin-top: 1.6rem
            }

            .sm\:mr-4 {
                margin-right: 1.6rem
            }

            .sm\:mb-4 {
                margin-bottom: 1.6rem
            }

            .sm\:ml-4 {
                margin-left: 1.6rem
            }

            .sm\:mt-5 {
                margin-top: 3.2rem
            }

            .sm\:mr-5 {
                margin-right: 3.2rem
            }

            .sm\:mb-5 {
                margin-bottom: 3.2rem
            }

            .sm\:ml-5 {
                margin-left: 3.2rem
            }

            .sm\:mt-6 {
                margin-top: 6.4rem
            }

            .sm\:mr-6 {
                margin-right: 6.4rem
            }

            .sm\:mb-6 {
                margin-bottom: 6.4rem
            }

            .sm\:ml-6 {
                margin-left: 6.4rem
            }

            .sm\:mt-7 {
                margin-top: 12.8rem
            }

            .sm\:mr-7 {
                margin-right: 12.8rem
            }

            .sm\:mb-7 {
                margin-bottom: 12.8rem
            }

            .sm\:ml-7 {
                margin-left: 12.8rem
            }

            .sm\:mt-8 {
                margin-top: 25.6rem
            }

            .sm\:mr-8 {
                margin-right: 25.6rem
            }

            .sm\:mb-8 {
                margin-bottom: 25.6rem
            }

            .sm\:ml-8 {
                margin-left: 25.6rem
            }

            .sm\:mt-auto {
                margin-top: auto
            }

            .sm\:mr-auto {
                margin-right: auto
            }

            .sm\:mb-auto {
                margin-bottom: auto
            }

            .sm\:ml-auto {
                margin-left: auto
            }

            .sm\:mt-px {
                margin-top: 1px
            }

            .sm\:mr-px {
                margin-right: 1px
            }

            .sm\:mb-px {
                margin-bottom: 1px
            }

            .sm\:ml-px {
                margin-left: 1px
            }

            .sm\:-mt-1 {
                margin-top: -.2rem
            }

            .sm\:-mr-1 {
                margin-right: -.2rem
            }

            .sm\:-mb-1 {
                margin-bottom: -.2rem
            }

            .sm\:-ml-1 {
                margin-left: -.2rem
            }

            .sm\:-mt-2 {
                margin-top: -.4rem
            }

            .sm\:-mr-2 {
                margin-right: -.4rem
            }

            .sm\:-mb-2 {
                margin-bottom: -.4rem
            }

            .sm\:-ml-2 {
                margin-left: -.4rem
            }

            .sm\:-mt-3 {
                margin-top: -.8rem
            }

            .sm\:-mr-3 {
                margin-right: -.8rem
            }

            .sm\:-mb-3 {
                margin-bottom: -.8rem
            }

            .sm\:-ml-3 {
                margin-left: -.8rem
            }

            .sm\:-mt-4 {
                margin-top: -1.6rem
            }

            .sm\:-mr-4 {
                margin-right: -1.6rem
            }

            .sm\:-mb-4 {
                margin-bottom: -1.6rem
            }

            .sm\:-ml-4 {
                margin-left: -1.6rem
            }

            .sm\:-mt-5 {
                margin-top: -3.2rem
            }

            .sm\:-mr-5 {
                margin-right: -3.2rem
            }

            .sm\:-mb-5 {
                margin-bottom: -3.2rem
            }

            .sm\:-ml-5 {
                margin-left: -3.2rem
            }

            .sm\:-mt-6 {
                margin-top: -6.4rem
            }

            .sm\:-mr-6 {
                margin-right: -6.4rem
            }

            .sm\:-mb-6 {
                margin-bottom: -6.4rem
            }

            .sm\:-ml-6 {
                margin-left: -6.4rem
            }

            .sm\:-mt-7 {
                margin-top: -12.8rem
            }

            .sm\:-mr-7 {
                margin-right: -12.8rem
            }

            .sm\:-mb-7 {
                margin-bottom: -12.8rem
            }

            .sm\:-ml-7 {
                margin-left: -12.8rem
            }

            .sm\:-mt-8 {
                margin-top: -25.6rem
            }

            .sm\:-mr-8 {
                margin-right: -25.6rem
            }

            .sm\:-mb-8 {
                margin-bottom: -25.6rem
            }

            .sm\:-ml-8 {
                margin-left: -25.6rem
            }

            .sm\:-mt-auto {
                margin-top: auto
            }

            .sm\:-mr-auto {
                margin-right: auto
            }

            .sm\:-mb-auto {
                margin-bottom: auto
            }

            .sm\:-ml-auto {
                margin-left: auto
            }

            .sm\:-mt-px {
                margin-top: -1px
            }

            .sm\:-mr-px {
                margin-right: -1px
            }

            .sm\:-mb-px {
                margin-bottom: -1px
            }

            .sm\:-ml-px {
                margin-left: -1px
            }

            .sm\:p-0 {
                padding: 0
            }

            .sm\:p-1 {
                padding: .2rem
            }

            .sm\:p-2 {
                padding: .4rem
            }

            .sm\:p-3 {
                padding: .8rem
            }

            .sm\:p-4 {
                padding: 1.6rem
            }

            .sm\:p-5 {
                padding: 3.2rem
            }

            .sm\:p-6 {
                padding: 6.4rem
            }

            .sm\:p-7 {
                padding: 12.8rem
            }

            .sm\:p-8 {
                padding: 25.6rem
            }

            .sm\:p-auto {
                padding: auto
            }

            .sm\:p-px {
                padding: 1px
            }

            .sm\:py-0 {
                padding-top: 0;
                padding-bottom: 0
            }

            .sm\:px-0 {
                padding-left: 0;
                padding-right: 0
            }

            .sm\:py-1 {
                padding-top: .2rem;
                padding-bottom: .2rem
            }

            .sm\:px-1 {
                padding-left: .2rem;
                padding-right: .2rem
            }

            .sm\:py-2 {
                padding-top: .4rem;
                padding-bottom: .4rem
            }

            .sm\:px-2 {
                padding-left: .4rem;
                padding-right: .4rem
            }

            .sm\:py-3 {
                padding-top: .8rem;
                padding-bottom: .8rem
            }

            .sm\:px-3 {
                padding-left: .8rem;
                padding-right: .8rem
            }

            .sm\:py-4 {
                padding-top: 1.6rem;
                padding-bottom: 1.6rem
            }

            .sm\:px-4 {
                padding-left: 1.6rem;
                padding-right: 1.6rem
            }

            .sm\:py-5 {
                padding-top: 3.2rem;
                padding-bottom: 3.2rem
            }

            .sm\:px-5 {
                padding-left: 3.2rem;
                padding-right: 3.2rem
            }

            .sm\:py-6 {
                padding-top: 6.4rem;
                padding-bottom: 6.4rem
            }

            .sm\:px-6 {
                padding-left: 6.4rem;
                padding-right: 6.4rem
            }

            .sm\:py-7 {
                padding-top: 12.8rem;
                padding-bottom: 12.8rem
            }

            .sm\:px-7 {
                padding-left: 12.8rem;
                padding-right: 12.8rem
            }

            .sm\:py-8 {
                padding-top: 25.6rem;
                padding-bottom: 25.6rem
            }

            .sm\:px-8 {
                padding-left: 25.6rem;
                padding-right: 25.6rem
            }

            .sm\:py-auto {
                padding-top: auto;
                padding-bottom: auto
            }

            .sm\:px-auto {
                padding-left: auto;
                padding-right: auto
            }

            .sm\:py-px {
                padding-top: 1px;
                padding-bottom: 1px
            }

            .sm\:px-px {
                padding-left: 1px;
                padding-right: 1px
            }

            .sm\:pt-0 {
                padding-top: 0
            }

            .sm\:pr-0 {
                padding-right: 0
            }

            .sm\:pb-0 {
                padding-bottom: 0
            }

            .sm\:pl-0 {
                padding-left: 0
            }

            .sm\:pt-1 {
                padding-top: .2rem
            }

            .sm\:pr-1 {
                padding-right: .2rem
            }

            .sm\:pb-1 {
                padding-bottom: .2rem
            }

            .sm\:pl-1 {
                padding-left: .2rem
            }

            .sm\:pt-2 {
                padding-top: .4rem
            }

            .sm\:pr-2 {
                padding-right: .4rem
            }

            .sm\:pb-2 {
                padding-bottom: .4rem
            }

            .sm\:pl-2 {
                padding-left: .4rem
            }

            .sm\:pt-3 {
                padding-top: .8rem
            }

            .sm\:pr-3 {
                padding-right: .8rem
            }

            .sm\:pb-3 {
                padding-bottom: .8rem
            }

            .sm\:pl-3 {
                padding-left: .8rem
            }

            .sm\:pt-4 {
                padding-top: 1.6rem
            }

            .sm\:pr-4 {
                padding-right: 1.6rem
            }

            .sm\:pb-4 {
                padding-bottom: 1.6rem
            }

            .sm\:pl-4 {
                padding-left: 1.6rem
            }

            .sm\:pt-5 {
                padding-top: 3.2rem
            }

            .sm\:pr-5 {
                padding-right: 3.2rem
            }

            .sm\:pb-5 {
                padding-bottom: 3.2rem
            }

            .sm\:pl-5 {
                padding-left: 3.2rem
            }

            .sm\:pt-6 {
                padding-top: 6.4rem
            }

            .sm\:pr-6 {
                padding-right: 6.4rem
            }

            .sm\:pb-6 {
                padding-bottom: 6.4rem
            }

            .sm\:pl-6 {
                padding-left: 6.4rem
            }

            .sm\:pt-7 {
                padding-top: 12.8rem
            }

            .sm\:pr-7 {
                padding-right: 12.8rem
            }

            .sm\:pb-7 {
                padding-bottom: 12.8rem
            }

            .sm\:pl-7 {
                padding-left: 12.8rem
            }

            .sm\:pt-8 {
                padding-top: 25.6rem
            }

            .sm\:pr-8 {
                padding-right: 25.6rem
            }

            .sm\:pb-8 {
                padding-bottom: 25.6rem
            }

            .sm\:pl-8 {
                padding-left: 25.6rem
            }

            .sm\:pt-auto {
                padding-top: auto
            }

            .sm\:pr-auto {
                padding-right: auto
            }

            .sm\:pb-auto {
                padding-bottom: auto
            }

            .sm\:pl-auto {
                padding-left: auto
            }

            .sm\:pt-px {
                padding-top: 1px
            }

            .sm\:pr-px {
                padding-right: 1px
            }

            .sm\:pb-px {
                padding-bottom: 1px
            }

            .sm\:pl-px {
                padding-left: 1px
            }

            .sm\:text-left {
                text-align: left
            }

            .sm\:text-center {
                text-align: center
            }

            .sm\:text-right {
                text-align: right
            }

            .sm\:text-justify {
                text-align: justify
            }

            .sm\:text-nano {
                font-size: 10px
            }

            .sm\:text-micro {
                font-size: calc(11px + (100vw - 320px)/ 880)
            }

            @media screen and (min-width:1200px) {
                .sm\:text-micro {
                    font-size: 12px
                }
            }

            @media screen and (max-width:320px) {
                .sm\:text-micro {
                    font-size: 11px
                }
            }

            .sm\:text-small {
                font-size: calc(13px + (100vw - 320px)/ 880)
            }

            @media screen and (min-width:1200px) {
                .sm\:text-small {
                    font-size: 14px
                }
            }

            @media screen and (max-width:320px) {
                .sm\:text-small {
                    font-size: 13px
                }
            }

            .sm\:text-base {
                font-size: calc(15px + (100vw - 320px)/ 880)
            }

            @media screen and (min-width:1200px) {
                .sm\:text-base {
                    font-size: 16px
                }
            }

            @media screen and (max-width:320px) {
                .sm\:text-base {
                    font-size: 15px
                }
            }

            .sm\:text-lead {
                font-size: calc(18px + (200vw - 640px)/ 880)
            }

            @media screen and (min-width:1200px) {
                .sm\:text-lead {
                    font-size: 20px
                }
            }

            @media screen and (max-width:320px) {
                .sm\:text-lead {
                    font-size: 18px
                }
            }

            .sm\:text-h6 {
                font-size: 1.46rem
            }

            .sm\:text-h5 {
                font-size: 1.86rem
            }

            .sm\:text-h4 {
                font-size: 2.13rem
            }

            .sm\:text-h3 {
                font-size: 2.6rem
            }

            .sm\:text-h2 {
                font-size: 3.2rem
            }

            .sm\:text-h1 {
                font-size: 4.26rem
            }

            .sm\:w-0 {
                width: 0
            }

            .sm\:w-auto {
                width: auto
            }

            .sm\:w-px {
                width: 1px
            }

            .sm\:w-full {
                width: 100%
            }

            .sm\:w-screen {
                width: 100vw
            }

            .sm\:gap-0 {
                grid-gap: 0;
                gap: 0
            }

            .sm\:gap-1 {
                grid-gap: .2rem;
                gap: .2rem
            }

            .sm\:gap-2 {
                grid-gap: .4rem;
                gap: .4rem
            }

            .sm\:gap-3 {
                grid-gap: .8rem;
                gap: .8rem
            }

            .sm\:gap-4 {
                grid-gap: 1.6rem;
                gap: 1.6rem
            }

            .sm\:gap-5 {
                grid-gap: 3.2rem;
                gap: 3.2rem
            }

            .sm\:gap-6 {
                grid-gap: 6.4rem;
                gap: 6.4rem
            }

            .sm\:gap-7 {
                grid-gap: 12.8rem;
                gap: 12.8rem
            }

            .sm\:gap-8 {
                grid-gap: 25.6rem;
                gap: 25.6rem
            }

            .sm\:gap-auto {
                grid-gap: auto;
                gap: auto
            }

            .sm\:gap-px {
                grid-gap: 1px;
                gap: 1px
            }

            .sm\:col-gap-0 {
                grid-column-gap: 0;
                -moz-column-gap: 0;
                column-gap: 0
            }

            .sm\:col-gap-1 {
                grid-column-gap: .2rem;
                -moz-column-gap: .2rem;
                column-gap: .2rem
            }

            .sm\:col-gap-2 {
                grid-column-gap: .4rem;
                -moz-column-gap: .4rem;
                column-gap: .4rem
            }

            .sm\:col-gap-3 {
                grid-column-gap: .8rem;
                -moz-column-gap: .8rem;
                column-gap: .8rem
            }

            .sm\:col-gap-4 {
                grid-column-gap: 1.6rem;
                -moz-column-gap: 1.6rem;
                column-gap: 1.6rem
            }

            .sm\:col-gap-5 {
                grid-column-gap: 3.2rem;
                -moz-column-gap: 3.2rem;
                column-gap: 3.2rem
            }

            .sm\:col-gap-6 {
                grid-column-gap: 6.4rem;
                -moz-column-gap: 6.4rem;
                column-gap: 6.4rem
            }

            .sm\:col-gap-7 {
                grid-column-gap: 12.8rem;
                -moz-column-gap: 12.8rem;
                column-gap: 12.8rem
            }

            .sm\:col-gap-8 {
                grid-column-gap: 25.6rem;
                -moz-column-gap: 25.6rem;
                column-gap: 25.6rem
            }

            .sm\:col-gap-auto {
                grid-column-gap: auto;
                -moz-column-gap: auto;
                column-gap: auto
            }

            .sm\:col-gap-px {
                grid-column-gap: 1px;
                -moz-column-gap: 1px;
                column-gap: 1px
            }

            .sm\:row-gap-0 {
                grid-row-gap: 0;
                row-gap: 0
            }

            .sm\:row-gap-1 {
                grid-row-gap: .2rem;
                row-gap: .2rem
            }

            .sm\:row-gap-2 {
                grid-row-gap: .4rem;
                row-gap: .4rem
            }

            .sm\:row-gap-3 {
                grid-row-gap: .8rem;
                row-gap: .8rem
            }

            .sm\:row-gap-4 {
                grid-row-gap: 1.6rem;
                row-gap: 1.6rem
            }

            .sm\:row-gap-5 {
                grid-row-gap: 3.2rem;
                row-gap: 3.2rem
            }

            .sm\:row-gap-6 {
                grid-row-gap: 6.4rem;
                row-gap: 6.4rem
            }

            .sm\:row-gap-7 {
                grid-row-gap: 12.8rem;
                row-gap: 12.8rem
            }

            .sm\:row-gap-8 {
                grid-row-gap: 25.6rem;
                row-gap: 25.6rem
            }

            .sm\:row-gap-auto {
                grid-row-gap: auto;
                row-gap: auto
            }

            .sm\:row-gap-px {
                grid-row-gap: 1px;
                row-gap: 1px
            }

            .sm\:grid-flow-row {
                grid-auto-flow: row
            }

            .sm\:grid-flow-col {
                grid-auto-flow: column
            }

            .sm\:grid-flow-row-dense {
                grid-auto-flow: row dense
            }

            .sm\:grid-flow-col-dense {
                grid-auto-flow: column dense
            }

            .sm\:col-auto {
                grid-column: auto
            }

            .sm\:col-span-1 {
                grid-column: span 1/span 1
            }

            .sm\:col-span-2 {
                grid-column: span 2/span 2
            }

            .sm\:col-span-3 {
                grid-column: span 3/span 3
            }

            .sm\:col-span-4 {
                grid-column: span 4/span 4
            }

            .sm\:col-span-5 {
                grid-column: span 5/span 5
            }

            .sm\:col-span-6 {
                grid-column: span 6/span 6
            }

            .sm\:col-span-7 {
                grid-column: span 7/span 7
            }

            .sm\:col-span-8 {
                grid-column: span 8/span 8
            }

            .sm\:col-span-9 {
                grid-column: span 9/span 9
            }

            .sm\:col-span-10 {
                grid-column: span 10/span 10
            }

            .sm\:col-span-11 {
                grid-column: span 11/span 11
            }

            .sm\:col-span-12 {
                grid-column: span 12/span 12
            }

            .sm\:col-start-1 {
                grid-column-start: 1
            }

            .sm\:col-start-2 {
                grid-column-start: 2
            }

            .sm\:col-start-3 {
                grid-column-start: 3
            }

            .sm\:col-start-4 {
                grid-column-start: 4
            }

            .sm\:col-start-5 {
                grid-column-start: 5
            }

            .sm\:col-start-6 {
                grid-column-start: 6
            }

            .sm\:col-start-7 {
                grid-column-start: 7
            }

            .sm\:col-start-8 {
                grid-column-start: 8
            }

            .sm\:col-start-9 {
                grid-column-start: 9
            }

            .sm\:col-start-10 {
                grid-column-start: 10
            }

            .sm\:col-start-11 {
                grid-column-start: 11
            }

            .sm\:col-start-12 {
                grid-column-start: 12
            }

            .sm\:col-start-13 {
                grid-column-start: 13
            }

            .sm\:col-start-auto {
                grid-column-start: auto
            }

            .sm\:col-end-1 {
                grid-column-end: 1
            }

            .sm\:col-end-2 {
                grid-column-end: 2
            }

            .sm\:col-end-3 {
                grid-column-end: 3
            }

            .sm\:col-end-4 {
                grid-column-end: 4
            }

            .sm\:col-end-5 {
                grid-column-end: 5
            }

            .sm\:col-end-6 {
                grid-column-end: 6
            }

            .sm\:col-end-7 {
                grid-column-end: 7
            }

            .sm\:col-end-8 {
                grid-column-end: 8
            }

            .sm\:col-end-9 {
                grid-column-end: 9
            }

            .sm\:col-end-10 {
                grid-column-end: 10
            }

            .sm\:col-end-11 {
                grid-column-end: 11
            }

            .sm\:col-end-12 {
                grid-column-end: 12
            }

            .sm\:col-end-13 {
                grid-column-end: 13
            }

            .sm\:col-end-auto {
                grid-column-end: auto
            }

            .sm\:grid-rows-1 {
                grid-template-rows: repeat(1, minmax(0, 1fr))
            }

            .sm\:grid-rows-2 {
                grid-template-rows: repeat(2, minmax(0, 1fr))
            }

            .sm\:grid-rows-3 {
                grid-template-rows: repeat(3, minmax(0, 1fr))
            }

            .sm\:grid-rows-4 {
                grid-template-rows: repeat(4, minmax(0, 1fr))
            }

            .sm\:grid-rows-5 {
                grid-template-rows: repeat(5, minmax(0, 1fr))
            }

            .sm\:grid-rows-6 {
                grid-template-rows: repeat(6, minmax(0, 1fr))
            }

            .sm\:grid-rows-none {
                grid-template-rows: none
            }

            .sm\:row-auto {
                grid-row: auto
            }

            .sm\:row-span-1 {
                grid-row: span 1/span 1
            }

            .sm\:row-span-2 {
                grid-row: span 2/span 2
            }

            .sm\:row-span-3 {
                grid-row: span 3/span 3
            }

            .sm\:row-span-4 {
                grid-row: span 4/span 4
            }

            .sm\:row-span-5 {
                grid-row: span 5/span 5
            }

            .sm\:row-span-6 {
                grid-row: span 6/span 6
            }

            .sm\:row-start-1 {
                grid-row-start: 1
            }

            .sm\:row-start-2 {
                grid-row-start: 2
            }

            .sm\:row-start-3 {
                grid-row-start: 3
            }

            .sm\:row-start-4 {
                grid-row-start: 4
            }

            .sm\:row-start-5 {
                grid-row-start: 5
            }

            .sm\:row-start-6 {
                grid-row-start: 6
            }

            .sm\:row-start-7 {
                grid-row-start: 7
            }

            .sm\:row-start-auto {
                grid-row-start: auto
            }

            .sm\:row-end-1 {
                grid-row-end: 1
            }

            .sm\:row-end-2 {
                grid-row-end: 2
            }

            .sm\:row-end-3 {
                grid-row-end: 3
            }

            .sm\:row-end-4 {
                grid-row-end: 4
            }

            .sm\:row-end-5 {
                grid-row-end: 5
            }

            .sm\:row-end-6 {
                grid-row-end: 6
            }

            .sm\:row-end-7 {
                grid-row-end: 7
            }

            .sm\:row-end-auto {
                grid-row-end: auto
            }

            .sm\:transform {
                --transform-translate-x: 0;
                --transform-translate-y: 0;
                --transform-rotate: 0;
                --transform-skew-x: 0;
                --transform-skew-y: 0;
                --transform-scale-x: 1;
                --transform-scale-y: 1;
                transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))
            }

            .sm\:transform-none {
                transform: none
            }

            .sm\:origin-center {
                transform-origin: center
            }

            .sm\:origin-top {
                transform-origin: top
            }

            .sm\:origin-top-right {
                transform-origin: top right
            }

            .sm\:origin-right {
                transform-origin: right
            }

            .sm\:origin-bottom-right {
                transform-origin: bottom right
            }

            .sm\:origin-bottom {
                transform-origin: bottom
            }

            .sm\:origin-bottom-left {
                transform-origin: bottom left
            }

            .sm\:origin-left {
                transform-origin: left
            }

            .sm\:origin-top-left {
                transform-origin: top left
            }

            .sm\:rotate-0 {
                --transform-rotate: 0
            }

            .sm\:rotate-45 {
                --transform-rotate: 45deg
            }

            .sm\:rotate-90 {
                --transform-rotate: 90deg
            }

            .sm\:rotate-180 {
                --transform-rotate: 180deg
            }

            .sm\:-rotate-180 {
                --transform-rotate: -180deg
            }

            .sm\:-rotate-90 {
                --transform-rotate: -90deg
            }

            .sm\:-rotate-45 {
                --transform-rotate: -45deg
            }

            .sm\:hover\:rotate-0:hover {
                --transform-rotate: 0
            }

            .sm\:hover\:rotate-45:hover {
                --transform-rotate: 45deg
            }

            .sm\:hover\:rotate-90:hover {
                --transform-rotate: 90deg
            }

            .sm\:hover\:rotate-180:hover {
                --transform-rotate: 180deg
            }

            .sm\:hover\:-rotate-180:hover {
                --transform-rotate: -180deg
            }

            .sm\:hover\:-rotate-90:hover {
                --transform-rotate: -90deg
            }

            .sm\:hover\:-rotate-45:hover {
                --transform-rotate: -45deg
            }

            .sm\:focus\:rotate-0:focus {
                --transform-rotate: 0
            }

            .sm\:focus\:rotate-45:focus {
                --transform-rotate: 45deg
            }

            .sm\:focus\:rotate-90:focus {
                --transform-rotate: 90deg
            }

            .sm\:focus\:rotate-180:focus {
                --transform-rotate: 180deg
            }

            .sm\:focus\:-rotate-180:focus {
                --transform-rotate: -180deg
            }

            .sm\:focus\:-rotate-90:focus {
                --transform-rotate: -90deg
            }

            .sm\:focus\:-rotate-45:focus {
                --transform-rotate: -45deg
            }

            .sm\:translate-x-0 {
                --transform-translate-x: 0
            }

            .sm\:translate-x-1 {
                --transform-translate-x: 0.2rem
            }

            .sm\:translate-x-2 {
                --transform-translate-x: 0.4rem
            }

            .sm\:translate-x-3 {
                --transform-translate-x: 0.8rem
            }

            .sm\:translate-x-4 {
                --transform-translate-x: 1.6rem
            }

            .sm\:translate-x-5 {
                --transform-translate-x: 3.2rem
            }

            .sm\:translate-x-6 {
                --transform-translate-x: 6.4rem
            }

            .sm\:translate-x-7 {
                --transform-translate-x: 12.8rem
            }

            .sm\:translate-x-8 {
                --transform-translate-x: 25.6rem
            }

            .sm\:translate-x-auto {
                --transform-translate-x: auto
            }

            .sm\:translate-x-px {
                --transform-translate-x: 1px
            }

            .sm\:-translate-x-1 {
                --transform-translate-x: -0.2rem
            }

            .sm\:-translate-x-2 {
                --transform-translate-x: -0.4rem
            }

            .sm\:-translate-x-3 {
                --transform-translate-x: -0.8rem
            }

            .sm\:-translate-x-4 {
                --transform-translate-x: -1.6rem
            }

            .sm\:-translate-x-5 {
                --transform-translate-x: -3.2rem
            }

            .sm\:-translate-x-6 {
                --transform-translate-x: -6.4rem
            }

            .sm\:-translate-x-7 {
                --transform-translate-x: -12.8rem
            }

            .sm\:-translate-x-8 {
                --transform-translate-x: -25.6rem
            }

            .sm\:-translate-x-auto {
                --transform-translate-x: auto
            }

            .sm\:-translate-x-px {
                --transform-translate-x: -1px
            }

            .sm\:-translate-x-full {
                --transform-translate-x: -100%
            }

            .sm\:-translate-x-1\/2 {
                --transform-translate-x: -50%
            }

            .sm\:translate-x-1\/2 {
                --transform-translate-x: 50%
            }

            .sm\:translate-x-full {
                --transform-translate-x: 100%
            }

            .sm\:translate-y-0 {
                --transform-translate-y: 0
            }

            .sm\:translate-y-1 {
                --transform-translate-y: 0.2rem
            }

            .sm\:translate-y-2 {
                --transform-translate-y: 0.4rem
            }

            .sm\:translate-y-3 {
                --transform-translate-y: 0.8rem
            }

            .sm\:translate-y-4 {
                --transform-translate-y: 1.6rem
            }

            .sm\:translate-y-5 {
                --transform-translate-y: 3.2rem
            }

            .sm\:translate-y-6 {
                --transform-translate-y: 6.4rem
            }

            .sm\:translate-y-7 {
                --transform-translate-y: 12.8rem
            }

            .sm\:translate-y-8 {
                --transform-translate-y: 25.6rem
            }

            .sm\:translate-y-auto {
                --transform-translate-y: auto
            }

            .sm\:translate-y-px {
                --transform-translate-y: 1px
            }

            .sm\:-translate-y-1 {
                --transform-translate-y: -0.2rem
            }

            .sm\:-translate-y-2 {
                --transform-translate-y: -0.4rem
            }

            .sm\:-translate-y-3 {
                --transform-translate-y: -0.8rem
            }

            .sm\:-translate-y-4 {
                --transform-translate-y: -1.6rem
            }

            .sm\:-translate-y-5 {
                --transform-translate-y: -3.2rem
            }

            .sm\:-translate-y-6 {
                --transform-translate-y: -6.4rem
            }

            .sm\:-translate-y-7 {
                --transform-translate-y: -12.8rem
            }

            .sm\:-translate-y-8 {
                --transform-translate-y: -25.6rem
            }

            .sm\:-translate-y-auto {
                --transform-translate-y: auto
            }

            .sm\:-translate-y-px {
                --transform-translate-y: -1px
            }

            .sm\:-translate-y-full {
                --transform-translate-y: -100%
            }

            .sm\:-translate-y-1\/2 {
                --transform-translate-y: -50%
            }

            .sm\:translate-y-1\/2 {
                --transform-translate-y: 50%
            }

            .sm\:translate-y-full {
                --transform-translate-y: 100%
            }

            .sm\:hover\:translate-x-0:hover {
                --transform-translate-x: 0
            }

            .sm\:hover\:translate-x-1:hover {
                --transform-translate-x: 0.2rem
            }

            .sm\:hover\:translate-x-2:hover {
                --transform-translate-x: 0.4rem
            }

            .sm\:hover\:translate-x-3:hover {
                --transform-translate-x: 0.8rem
            }

            .sm\:hover\:translate-x-4:hover {
                --transform-translate-x: 1.6rem
            }

            .sm\:hover\:translate-x-5:hover {
                --transform-translate-x: 3.2rem
            }

            .sm\:hover\:translate-x-6:hover {
                --transform-translate-x: 6.4rem
            }

            .sm\:hover\:translate-x-7:hover {
                --transform-translate-x: 12.8rem
            }

            .sm\:hover\:translate-x-8:hover {
                --transform-translate-x: 25.6rem
            }

            .sm\:hover\:translate-x-auto:hover {
                --transform-translate-x: auto
            }

            .sm\:hover\:translate-x-px:hover {
                --transform-translate-x: 1px
            }

            .sm\:hover\:-translate-x-1:hover {
                --transform-translate-x: -0.2rem
            }

            .sm\:hover\:-translate-x-2:hover {
                --transform-translate-x: -0.4rem
            }

            .sm\:hover\:-translate-x-3:hover {
                --transform-translate-x: -0.8rem
            }

            .sm\:hover\:-translate-x-4:hover {
                --transform-translate-x: -1.6rem
            }

            .sm\:hover\:-translate-x-5:hover {
                --transform-translate-x: -3.2rem
            }

            .sm\:hover\:-translate-x-6:hover {
                --transform-translate-x: -6.4rem
            }

            .sm\:hover\:-translate-x-7:hover {
                --transform-translate-x: -12.8rem
            }

            .sm\:hover\:-translate-x-8:hover {
                --transform-translate-x: -25.6rem
            }

            .sm\:hover\:-translate-x-auto:hover {
                --transform-translate-x: auto
            }

            .sm\:hover\:-translate-x-px:hover {
                --transform-translate-x: -1px
            }

            .sm\:hover\:-translate-x-full:hover {
                --transform-translate-x: -100%
            }

            .sm\:hover\:-translate-x-1\/2:hover {
                --transform-translate-x: -50%
            }

            .sm\:hover\:translate-x-1\/2:hover {
                --transform-translate-x: 50%
            }

            .sm\:hover\:translate-x-full:hover {
                --transform-translate-x: 100%
            }

            .sm\:hover\:translate-y-0:hover {
                --transform-translate-y: 0
            }

            .sm\:hover\:translate-y-1:hover {
                --transform-translate-y: 0.2rem
            }

            .sm\:hover\:translate-y-2:hover {
                --transform-translate-y: 0.4rem
            }

            .sm\:hover\:translate-y-3:hover {
                --transform-translate-y: 0.8rem
            }

            .sm\:hover\:translate-y-4:hover {
                --transform-translate-y: 1.6rem
            }

            .sm\:hover\:translate-y-5:hover {
                --transform-translate-y: 3.2rem
            }

            .sm\:hover\:translate-y-6:hover {
                --transform-translate-y: 6.4rem
            }

            .sm\:hover\:translate-y-7:hover {
                --transform-translate-y: 12.8rem
            }

            .sm\:hover\:translate-y-8:hover {
                --transform-translate-y: 25.6rem
            }

            .sm\:hover\:translate-y-auto:hover {
                --transform-translate-y: auto
            }

            .sm\:hover\:translate-y-px:hover {
                --transform-translate-y: 1px
            }

            .sm\:hover\:-translate-y-1:hover {
                --transform-translate-y: -0.2rem
            }

            .sm\:hover\:-translate-y-2:hover {
                --transform-translate-y: -0.4rem
            }

            .sm\:hover\:-translate-y-3:hover {
                --transform-translate-y: -0.8rem
            }

            .sm\:hover\:-translate-y-4:hover {
                --transform-translate-y: -1.6rem
            }

            .sm\:hover\:-translate-y-5:hover {
                --transform-translate-y: -3.2rem
            }

            .sm\:hover\:-translate-y-6:hover {
                --transform-translate-y: -6.4rem
            }

            .sm\:hover\:-translate-y-7:hover {
                --transform-translate-y: -12.8rem
            }

            .sm\:hover\:-translate-y-8:hover {
                --transform-translate-y: -25.6rem
            }

            .sm\:hover\:-translate-y-auto:hover {
                --transform-translate-y: auto
            }

            .sm\:hover\:-translate-y-px:hover {
                --transform-translate-y: -1px
            }

            .sm\:hover\:-translate-y-full:hover {
                --transform-translate-y: -100%
            }

            .sm\:hover\:-translate-y-1\/2:hover {
                --transform-translate-y: -50%
            }

            .sm\:hover\:translate-y-1\/2:hover {
                --transform-translate-y: 50%
            }

            .sm\:hover\:translate-y-full:hover {
                --transform-translate-y: 100%
            }

            .sm\:focus\:translate-x-0:focus {
                --transform-translate-x: 0
            }

            .sm\:focus\:translate-x-1:focus {
                --transform-translate-x: 0.2rem
            }

            .sm\:focus\:translate-x-2:focus {
                --transform-translate-x: 0.4rem
            }

            .sm\:focus\:translate-x-3:focus {
                --transform-translate-x: 0.8rem
            }

            .sm\:focus\:translate-x-4:focus {
                --transform-translate-x: 1.6rem
            }

            .sm\:focus\:translate-x-5:focus {
                --transform-translate-x: 3.2rem
            }

            .sm\:focus\:translate-x-6:focus {
                --transform-translate-x: 6.4rem
            }

            .sm\:focus\:translate-x-7:focus {
                --transform-translate-x: 12.8rem
            }

            .sm\:focus\:translate-x-8:focus {
                --transform-translate-x: 25.6rem
            }

            .sm\:focus\:translate-x-auto:focus {
                --transform-translate-x: auto
            }

            .sm\:focus\:translate-x-px:focus {
                --transform-translate-x: 1px
            }

            .sm\:focus\:-translate-x-1:focus {
                --transform-translate-x: -0.2rem
            }

            .sm\:focus\:-translate-x-2:focus {
                --transform-translate-x: -0.4rem
            }

            .sm\:focus\:-translate-x-3:focus {
                --transform-translate-x: -0.8rem
            }

            .sm\:focus\:-translate-x-4:focus {
                --transform-translate-x: -1.6rem
            }

            .sm\:focus\:-translate-x-5:focus {
                --transform-translate-x: -3.2rem
            }

            .sm\:focus\:-translate-x-6:focus {
                --transform-translate-x: -6.4rem
            }

            .sm\:focus\:-translate-x-7:focus {
                --transform-translate-x: -12.8rem
            }

            .sm\:focus\:-translate-x-8:focus {
                --transform-translate-x: -25.6rem
            }

            .sm\:focus\:-translate-x-auto:focus {
                --transform-translate-x: auto
            }

            .sm\:focus\:-translate-x-px:focus {
                --transform-translate-x: -1px
            }

            .sm\:focus\:-translate-x-full:focus {
                --transform-translate-x: -100%
            }

            .sm\:focus\:-translate-x-1\/2:focus {
                --transform-translate-x: -50%
            }

            .sm\:focus\:translate-x-1\/2:focus {
                --transform-translate-x: 50%
            }

            .sm\:focus\:translate-x-full:focus {
                --transform-translate-x: 100%
            }

            .sm\:focus\:translate-y-0:focus {
                --transform-translate-y: 0
            }

            .sm\:focus\:translate-y-1:focus {
                --transform-translate-y: 0.2rem
            }

            .sm\:focus\:translate-y-2:focus {
                --transform-translate-y: 0.4rem
            }

            .sm\:focus\:translate-y-3:focus {
                --transform-translate-y: 0.8rem
            }

            .sm\:focus\:translate-y-4:focus {
                --transform-translate-y: 1.6rem
            }

            .sm\:focus\:translate-y-5:focus {
                --transform-translate-y: 3.2rem
            }

            .sm\:focus\:translate-y-6:focus {
                --transform-translate-y: 6.4rem
            }

            .sm\:focus\:translate-y-7:focus {
                --transform-translate-y: 12.8rem
            }

            .sm\:focus\:translate-y-8:focus {
                --transform-translate-y: 25.6rem
            }

            .sm\:focus\:translate-y-auto:focus {
                --transform-translate-y: auto
            }

            .sm\:focus\:translate-y-px:focus {
                --transform-translate-y: 1px
            }

            .sm\:focus\:-translate-y-1:focus {
                --transform-translate-y: -0.2rem
            }

            .sm\:focus\:-translate-y-2:focus {
                --transform-translate-y: -0.4rem
            }

            .sm\:focus\:-translate-y-3:focus {
                --transform-translate-y: -0.8rem
            }

            .sm\:focus\:-translate-y-4:focus {
                --transform-translate-y: -1.6rem
            }

            .sm\:focus\:-translate-y-5:focus {
                --transform-translate-y: -3.2rem
            }

            .sm\:focus\:-translate-y-6:focus {
                --transform-translate-y: -6.4rem
            }

            .sm\:focus\:-translate-y-7:focus {
                --transform-translate-y: -12.8rem
            }

            .sm\:focus\:-translate-y-8:focus {
                --transform-translate-y: -25.6rem
            }

            .sm\:focus\:-translate-y-auto:focus {
                --transform-translate-y: auto
            }

            .sm\:focus\:-translate-y-px:focus {
                --transform-translate-y: -1px
            }

            .sm\:focus\:-translate-y-full:focus {
                --transform-translate-y: -100%
            }

            .sm\:focus\:-translate-y-1\/2:focus {
                --transform-translate-y: -50%
            }

            .sm\:focus\:translate-y-1\/2:focus {
                --transform-translate-y: 50%
            }

            .sm\:focus\:translate-y-full:focus {
                --transform-translate-y: 100%
            }

            .sm\:skew-x-0 {
                --transform-skew-x: 0
            }

            .sm\:skew-x-3 {
                --transform-skew-x: 3deg
            }

            .sm\:skew-x-6 {
                --transform-skew-x: 6deg
            }

            .sm\:skew-x-12 {
                --transform-skew-x: 12deg
            }

            .sm\:-skew-x-12 {
                --transform-skew-x: -12deg
            }

            .sm\:-skew-x-6 {
                --transform-skew-x: -6deg
            }

            .sm\:-skew-x-3 {
                --transform-skew-x: -3deg
            }

            .sm\:skew-y-0 {
                --transform-skew-y: 0
            }

            .sm\:skew-y-3 {
                --transform-skew-y: 3deg
            }

            .sm\:skew-y-6 {
                --transform-skew-y: 6deg
            }

            .sm\:skew-y-12 {
                --transform-skew-y: 12deg
            }

            .sm\:-skew-y-12 {
                --transform-skew-y: -12deg
            }

            .sm\:-skew-y-6 {
                --transform-skew-y: -6deg
            }

            .sm\:-skew-y-3 {
                --transform-skew-y: -3deg
            }

            .sm\:hover\:skew-x-0:hover {
                --transform-skew-x: 0
            }

            .sm\:hover\:skew-x-3:hover {
                --transform-skew-x: 3deg
            }

            .sm\:hover\:skew-x-6:hover {
                --transform-skew-x: 6deg
            }

            .sm\:hover\:skew-x-12:hover {
                --transform-skew-x: 12deg
            }

            .sm\:hover\:-skew-x-12:hover {
                --transform-skew-x: -12deg
            }

            .sm\:hover\:-skew-x-6:hover {
                --transform-skew-x: -6deg
            }

            .sm\:hover\:-skew-x-3:hover {
                --transform-skew-x: -3deg
            }

            .sm\:hover\:skew-y-0:hover {
                --transform-skew-y: 0
            }

            .sm\:hover\:skew-y-3:hover {
                --transform-skew-y: 3deg
            }

            .sm\:hover\:skew-y-6:hover {
                --transform-skew-y: 6deg
            }

            .sm\:hover\:skew-y-12:hover {
                --transform-skew-y: 12deg
            }

            .sm\:hover\:-skew-y-12:hover {
                --transform-skew-y: -12deg
            }

            .sm\:hover\:-skew-y-6:hover {
                --transform-skew-y: -6deg
            }

            .sm\:hover\:-skew-y-3:hover {
                --transform-skew-y: -3deg
            }

            .sm\:focus\:skew-x-0:focus {
                --transform-skew-x: 0
            }

            .sm\:focus\:skew-x-3:focus {
                --transform-skew-x: 3deg
            }

            .sm\:focus\:skew-x-6:focus {
                --transform-skew-x: 6deg
            }

            .sm\:focus\:skew-x-12:focus {
                --transform-skew-x: 12deg
            }

            .sm\:focus\:-skew-x-12:focus {
                --transform-skew-x: -12deg
            }

            .sm\:focus\:-skew-x-6:focus {
                --transform-skew-x: -6deg
            }

            .sm\:focus\:-skew-x-3:focus {
                --transform-skew-x: -3deg
            }

            .sm\:focus\:skew-y-0:focus {
                --transform-skew-y: 0
            }

            .sm\:focus\:skew-y-3:focus {
                --transform-skew-y: 3deg
            }

            .sm\:focus\:skew-y-6:focus {
                --transform-skew-y: 6deg
            }

            .sm\:focus\:skew-y-12:focus {
                --transform-skew-y: 12deg
            }

            .sm\:focus\:-skew-y-12:focus {
                --transform-skew-y: -12deg
            }

            .sm\:focus\:-skew-y-6:focus {
                --transform-skew-y: -6deg
            }

            .sm\:focus\:-skew-y-3:focus {
                --transform-skew-y: -3deg
            }

            .sm\:container-fluid {
                width: 100%;
                padding-right: 16px;
                padding-left: 16px;
                margin-right: auto;
                margin-left: auto
            }

            .sm\:col {
                flex-basis: 0;
                flex-grow: 1;
                max-width: 100%
            }

            .sm\:col-auto {
                flex: 0 0 auto;
                width: auto;
                max-width: 100%
            }

            .sm\:col-1 {
                flex: 0 0 8.333333333333334%;
                max-width: 8.333333333333334%
            }

            .sm\:col-2 {
                flex: 0 0 16.666666666666668%;
                max-width: 16.666666666666668%
            }

            .sm\:col-3 {
                flex: 0 0 25%;
                max-width: 25%
            }

            .sm\:col-4 {
                flex: 0 0 33.333333333333336%;
                max-width: 33.333333333333336%
            }

            .sm\:col-5 {
                flex: 0 0 41.66666666666667%;
                max-width: 41.66666666666667%
            }

            .sm\:col-6 {
                flex: 0 0 50%;
                max-width: 50%
            }

            .sm\:col-7 {
                flex: 0 0 58.333333333333336%;
                max-width: 58.333333333333336%
            }

            .sm\:col-8 {
                flex: 0 0 66.66666666666667%;
                max-width: 66.66666666666667%
            }

            .sm\:col-9 {
                flex: 0 0 75%;
                max-width: 75%
            }

            .sm\:col-10 {
                flex: 0 0 83.33333333333334%;
                max-width: 83.33333333333334%
            }

            .sm\:col-11 {
                flex: 0 0 91.66666666666667%;
                max-width: 91.66666666666667%
            }

            .sm\:col-12 {
                flex: 0 0 100%;
                max-width: 100%
            }

            .sm\:order-first {
                order: -1
            }

            .sm\:order-last {
                order: 13
            }

            .sm\:order-0 {
                order: 0
            }

            .sm\:order-1 {
                order: 1
            }

            .sm\:order-2 {
                order: 2
            }

            .sm\:order-3 {
                order: 3
            }

            .sm\:order-4 {
                order: 4
            }

            .sm\:order-5 {
                order: 5
            }

            .sm\:order-6 {
                order: 6
            }

            .sm\:order-7 {
                order: 7
            }

            .sm\:order-8 {
                order: 8
            }

            .sm\:order-9 {
                order: 9
            }

            .sm\:order-10 {
                order: 10
            }

            .sm\:order-11 {
                order: 11
            }

            .sm\:order-12 {
                order: 12
            }

            [dir=ltr] .sm\:offset-0 {
                margin-left: 0
            }

            [dir=rtl] .sm\:offset-0 {
                margin-right: 0
            }

            [dir=ltr] .sm\:offset-1 {
                margin-left: 8.333333333333334%
            }

            [dir=rtl] .sm\:offset-1 {
                margin-right: 8.333333333333334%
            }

            [dir=ltr] .sm\:offset-2 {
                margin-left: 16.666666666666668%
            }

            [dir=rtl] .sm\:offset-2 {
                margin-right: 16.666666666666668%
            }

            [dir=ltr] .sm\:offset-3 {
                margin-left: 25%
            }

            [dir=rtl] .sm\:offset-3 {
                margin-right: 25%
            }

            [dir=ltr] .sm\:offset-4 {
                margin-left: 33.333333333333336%
            }

            [dir=rtl] .sm\:offset-4 {
                margin-right: 33.333333333333336%
            }

            [dir=ltr] .sm\:offset-5 {
                margin-left: 41.66666666666667%
            }

            [dir=rtl] .sm\:offset-5 {
                margin-right: 41.66666666666667%
            }

            [dir=ltr] .sm\:offset-6 {
                margin-left: 50%
            }

            [dir=rtl] .sm\:offset-6 {
                margin-right: 50%
            }

            [dir=ltr] .sm\:offset-7 {
                margin-left: 58.333333333333336%
            }

            [dir=rtl] .sm\:offset-7 {
                margin-right: 58.333333333333336%
            }

            [dir=ltr] .sm\:offset-8 {
                margin-left: 66.66666666666667%
            }

            [dir=rtl] .sm\:offset-8 {
                margin-right: 66.66666666666667%
            }

            [dir=ltr] .sm\:offset-9 {
                margin-left: 75%
            }

            [dir=rtl] .sm\:offset-9 {
                margin-right: 75%
            }

            [dir=ltr] .sm\:offset-10 {
                margin-left: 83.33333333333334%
            }

            [dir=rtl] .sm\:offset-10 {
                margin-right: 83.33333333333334%
            }

            [dir=ltr] .sm\:offset-11 {
                margin-left: 91.66666666666667%
            }

            [dir=rtl] .sm\:offset-11 {
                margin-right: 91.66666666666667%
            }
        }

        @media (min-width:992px) {
            .lg\:block {
                display: block
            }

            .lg\:inline-block {
                display: inline-block
            }

            .lg\:inline {
                display: inline
            }

            .lg\:flex {
                display: flex
            }

            .lg\:inline-flex {
                display: inline-flex
            }

            .lg\:grid {
                display: grid
            }

            .lg\:table {
                display: table
            }

            .lg\:table-caption {
                display: table-caption
            }

            .lg\:table-cell {
                display: table-cell
            }

            .lg\:table-column {
                display: table-column
            }

            .lg\:table-column-group {
                display: table-column-group
            }

            .lg\:table-footer-group {
                display: table-footer-group
            }

            .lg\:table-header-group {
                display: table-header-group
            }

            .lg\:table-row-group {
                display: table-row-group
            }

            .lg\:table-row {
                display: table-row
            }

            .lg\:hidden {
                display: none
            }

            .lg\:flex-row {
                flex-direction: row
            }

            .lg\:flex-row-reverse {
                flex-direction: row-reverse
            }

            .lg\:flex-col {
                flex-direction: column
            }

            .lg\:flex-col-reverse {
                flex-direction: column-reverse
            }

            .lg\:flex-wrap {
                flex-wrap: wrap
            }

            .lg\:flex-wrap-reverse {
                flex-wrap: wrap-reverse
            }

            .lg\:flex-no-wrap {
                flex-wrap: nowrap
            }

            .lg\:items-start {
                align-items: flex-start
            }

            .lg\:items-end {
                align-items: flex-end
            }

            .lg\:items-center {
                align-items: center
            }

            .lg\:items-baseline {
                align-items: baseline
            }

            .lg\:items-stretch {
                align-items: stretch
            }

            .lg\:self-auto {
                align-self: auto
            }

            .lg\:self-start {
                align-self: flex-start
            }

            .lg\:self-end {
                align-self: flex-end
            }

            .lg\:self-center {
                align-self: center
            }

            .lg\:self-stretch {
                align-self: stretch
            }

            .lg\:justify-start {
                justify-content: flex-start
            }

            .lg\:justify-end {
                justify-content: flex-end
            }

            .lg\:justify-center {
                justify-content: center
            }

            .lg\:justify-between {
                justify-content: space-between
            }

            .lg\:justify-around {
                justify-content: space-around
            }

            .lg\:justify-evenly {
                justify-content: space-evenly
            }

            .lg\:content-center {
                align-content: center
            }

            .lg\:content-start {
                align-content: flex-start
            }

            .lg\:content-end {
                align-content: flex-end
            }

            .lg\:content-between {
                align-content: space-between
            }

            .lg\:content-around {
                align-content: space-around
            }

            .lg\:flex-1 {
                flex: 1 1 0%
            }

            .lg\:flex-auto {
                flex: 1 1 auto
            }

            .lg\:flex-initial {
                flex: 0 1 auto
            }

            .lg\:flex-none {
                flex: none
            }

            .lg\:flex-grow-0 {
                flex-grow: 0
            }

            .lg\:flex-grow {
                flex-grow: 1
            }

            .lg\:flex-shrink-0 {
                flex-shrink: 0
            }

            .lg\:flex-shrink {
                flex-shrink: 1
            }

            .lg\:m-0 {
                margin: 0
            }

            .lg\:m-1 {
                margin: .2rem
            }

            .lg\:m-2 {
                margin: .4rem
            }

            .lg\:m-3 {
                margin: .8rem
            }

            .lg\:m-4 {
                margin: 1.6rem
            }

            .lg\:m-5 {
                margin: 3.2rem
            }

            .lg\:m-6 {
                margin: 6.4rem
            }

            .lg\:m-7 {
                margin: 12.8rem
            }

            .lg\:m-8 {
                margin: 25.6rem
            }

            .lg\:m-auto {
                margin: auto
            }

            .lg\:m-px {
                margin: 1px
            }

            .lg\:-m-1 {
                margin: -.2rem
            }

            .lg\:-m-2 {
                margin: -.4rem
            }

            .lg\:-m-3 {
                margin: -.8rem
            }

            .lg\:-m-4 {
                margin: -1.6rem
            }

            .lg\:-m-5 {
                margin: -3.2rem
            }

            .lg\:-m-6 {
                margin: -6.4rem
            }

            .lg\:-m-7 {
                margin: -12.8rem
            }

            .lg\:-m-8 {
                margin: -25.6rem
            }

            .lg\:-m-auto {
                margin: auto
            }

            .lg\:-m-px {
                margin: -1px
            }

            .lg\:my-0 {
                margin-top: 0;
                margin-bottom: 0
            }

            .lg\:mx-0 {
                margin-left: 0;
                margin-right: 0
            }

            .lg\:my-1 {
                margin-top: .2rem;
                margin-bottom: .2rem
            }

            .lg\:mx-1 {
                margin-left: .2rem;
                margin-right: .2rem
            }

            .lg\:my-2 {
                margin-top: .4rem;
                margin-bottom: .4rem
            }

            .lg\:mx-2 {
                margin-left: .4rem;
                margin-right: .4rem
            }

            .lg\:my-3 {
                margin-top: .8rem;
                margin-bottom: .8rem
            }

            .lg\:mx-3 {
                margin-left: .8rem;
                margin-right: .8rem
            }

            .lg\:my-4 {
                margin-top: 1.6rem;
                margin-bottom: 1.6rem
            }

            .lg\:mx-4 {
                margin-left: 1.6rem;
                margin-right: 1.6rem
            }

            .lg\:my-5 {
                margin-top: 3.2rem;
                margin-bottom: 3.2rem
            }

            .lg\:mx-5 {
                margin-left: 3.2rem;
                margin-right: 3.2rem
            }

            .lg\:my-6 {
                margin-top: 6.4rem;
                margin-bottom: 6.4rem
            }

            .lg\:mx-6 {
                margin-left: 6.4rem;
                margin-right: 6.4rem
            }

            .lg\:my-7 {
                margin-top: 12.8rem;
                margin-bottom: 12.8rem
            }

            .lg\:mx-7 {
                margin-left: 12.8rem;
                margin-right: 12.8rem
            }

            .lg\:my-8 {
                margin-top: 25.6rem;
                margin-bottom: 25.6rem
            }

            .lg\:mx-8 {
                margin-left: 25.6rem;
                margin-right: 25.6rem
            }

            .lg\:my-auto {
                margin-top: auto;
                margin-bottom: auto
            }

            .lg\:mx-auto {
                margin-left: auto;
                margin-right: auto
            }

            .lg\:my-px {
                margin-top: 1px;
                margin-bottom: 1px
            }

            .lg\:mx-px {
                margin-left: 1px;
                margin-right: 1px
            }

            .lg\:-my-1 {
                margin-top: -.2rem;
                margin-bottom: -.2rem
            }

            .lg\:-mx-1 {
                margin-left: -.2rem;
                margin-right: -.2rem
            }

            .lg\:-my-2 {
                margin-top: -.4rem;
                margin-bottom: -.4rem
            }

            .lg\:-mx-2 {
                margin-left: -.4rem;
                margin-right: -.4rem
            }

            .lg\:-my-3 {
                margin-top: -.8rem;
                margin-bottom: -.8rem
            }

            .lg\:-mx-3 {
                margin-left: -.8rem;
                margin-right: -.8rem
            }

            .lg\:-my-4 {
                margin-top: -1.6rem;
                margin-bottom: -1.6rem
            }

            .lg\:-mx-4 {
                margin-left: -1.6rem;
                margin-right: -1.6rem
            }

            .lg\:-my-5 {
                margin-top: -3.2rem;
                margin-bottom: -3.2rem
            }

            .lg\:-mx-5 {
                margin-left: -3.2rem;
                margin-right: -3.2rem
            }

            .lg\:-my-6 {
                margin-top: -6.4rem;
                margin-bottom: -6.4rem
            }

            .lg\:-mx-6 {
                margin-left: -6.4rem;
                margin-right: -6.4rem
            }

            .lg\:-my-7 {
                margin-top: -12.8rem;
                margin-bottom: -12.8rem
            }

            .lg\:-mx-7 {
                margin-left: -12.8rem;
                margin-right: -12.8rem
            }

            .lg\:-my-8 {
                margin-top: -25.6rem;
                margin-bottom: -25.6rem
            }

            .lg\:-mx-8 {
                margin-left: -25.6rem;
                margin-right: -25.6rem
            }

            .lg\:-my-auto {
                margin-top: auto;
                margin-bottom: auto
            }

            .lg\:-mx-auto {
                margin-left: auto;
                margin-right: auto
            }

            .lg\:-my-px {
                margin-top: -1px;
                margin-bottom: -1px
            }

            .lg\:-mx-px {
                margin-left: -1px;
                margin-right: -1px
            }

            .lg\:mt-0 {
                margin-top: 0
            }

            .lg\:mr-0 {
                margin-right: 0
            }

            .lg\:mb-0 {
                margin-bottom: 0
            }

            .lg\:ml-0 {
                margin-left: 0
            }

            .lg\:mt-1 {
                margin-top: .2rem
            }

            .lg\:mr-1 {
                margin-right: .2rem
            }

            .lg\:mb-1 {
                margin-bottom: .2rem
            }

            .lg\:ml-1 {
                margin-left: .2rem
            }

            .lg\:mt-2 {
                margin-top: .4rem
            }

            .lg\:mr-2 {
                margin-right: .4rem
            }

            .lg\:mb-2 {
                margin-bottom: .4rem
            }

            .lg\:ml-2 {
                margin-left: .4rem
            }

            .lg\:mt-3 {
                margin-top: .8rem
            }

            .lg\:mr-3 {
                margin-right: .8rem
            }

            .lg\:mb-3 {
                margin-bottom: .8rem
            }

            .lg\:ml-3 {
                margin-left: .8rem
            }

            .lg\:mt-4 {
                margin-top: 1.6rem
            }

            .lg\:mr-4 {
                margin-right: 1.6rem
            }

            .lg\:mb-4 {
                margin-bottom: 1.6rem
            }

            .lg\:ml-4 {
                margin-left: 1.6rem
            }

            .lg\:mt-5 {
                margin-top: 3.2rem
            }

            .lg\:mr-5 {
                margin-right: 3.2rem
            }

            .lg\:mb-5 {
                margin-bottom: 3.2rem
            }

            .lg\:ml-5 {
                margin-left: 3.2rem
            }

            .lg\:mt-6 {
                margin-top: 6.4rem
            }

            .lg\:mr-6 {
                margin-right: 6.4rem
            }

            .lg\:mb-6 {
                margin-bottom: 6.4rem
            }

            .lg\:ml-6 {
                margin-left: 6.4rem
            }

            .lg\:mt-7 {
                margin-top: 12.8rem
            }

            .lg\:mr-7 {
                margin-right: 12.8rem
            }

            .lg\:mb-7 {
                margin-bottom: 12.8rem
            }

            .lg\:ml-7 {
                margin-left: 12.8rem
            }

            .lg\:mt-8 {
                margin-top: 25.6rem
            }

            .lg\:mr-8 {
                margin-right: 25.6rem
            }

            .lg\:mb-8 {
                margin-bottom: 25.6rem
            }

            .lg\:ml-8 {
                margin-left: 25.6rem
            }

            .lg\:mt-auto {
                margin-top: auto
            }

            .lg\:mr-auto {
                margin-right: auto
            }

            .lg\:mb-auto {
                margin-bottom: auto
            }

            .lg\:ml-auto {
                margin-left: auto
            }

            .lg\:mt-px {
                margin-top: 1px
            }

            .lg\:mr-px {
                margin-right: 1px
            }

            .lg\:mb-px {
                margin-bottom: 1px
            }

            .lg\:ml-px {
                margin-left: 1px
            }

            .lg\:-mt-1 {
                margin-top: -.2rem
            }

            .lg\:-mr-1 {
                margin-right: -.2rem
            }

            .lg\:-mb-1 {
                margin-bottom: -.2rem
            }

            .lg\:-ml-1 {
                margin-left: -.2rem
            }

            .lg\:-mt-2 {
                margin-top: -.4rem
            }

            .lg\:-mr-2 {
                margin-right: -.4rem
            }

            .lg\:-mb-2 {
                margin-bottom: -.4rem
            }

            .lg\:-ml-2 {
                margin-left: -.4rem
            }

            .lg\:-mt-3 {
                margin-top: -.8rem
            }

            .lg\:-mr-3 {
                margin-right: -.8rem
            }

            .lg\:-mb-3 {
                margin-bottom: -.8rem
            }

            .lg\:-ml-3 {
                margin-left: -.8rem
            }

            .lg\:-mt-4 {
                margin-top: -1.6rem
            }

            .lg\:-mr-4 {
                margin-right: -1.6rem
            }

            .lg\:-mb-4 {
                margin-bottom: -1.6rem
            }

            .lg\:-ml-4 {
                margin-left: -1.6rem
            }

            .lg\:-mt-5 {
                margin-top: -3.2rem
            }

            .lg\:-mr-5 {
                margin-right: -3.2rem
            }

            .lg\:-mb-5 {
                margin-bottom: -3.2rem
            }

            .lg\:-ml-5 {
                margin-left: -3.2rem
            }

            .lg\:-mt-6 {
                margin-top: -6.4rem
            }

            .lg\:-mr-6 {
                margin-right: -6.4rem
            }

            .lg\:-mb-6 {
                margin-bottom: -6.4rem
            }

            .lg\:-ml-6 {
                margin-left: -6.4rem
            }

            .lg\:-mt-7 {
                margin-top: -12.8rem
            }

            .lg\:-mr-7 {
                margin-right: -12.8rem
            }

            .lg\:-mb-7 {
                margin-bottom: -12.8rem
            }

            .lg\:-ml-7 {
                margin-left: -12.8rem
            }

            .lg\:-mt-8 {
                margin-top: -25.6rem
            }

            .lg\:-mr-8 {
                margin-right: -25.6rem
            }

            .lg\:-mb-8 {
                margin-bottom: -25.6rem
            }

            .lg\:-ml-8 {
                margin-left: -25.6rem
            }

            .lg\:-mt-auto {
                margin-top: auto
            }

            .lg\:-mr-auto {
                margin-right: auto
            }

            .lg\:-mb-auto {
                margin-bottom: auto
            }

            .lg\:-ml-auto {
                margin-left: auto
            }

            .lg\:-mt-px {
                margin-top: -1px
            }

            .lg\:-mr-px {
                margin-right: -1px
            }

            .lg\:-mb-px {
                margin-bottom: -1px
            }

            .lg\:-ml-px {
                margin-left: -1px
            }

            .lg\:p-0 {
                padding: 0
            }

            .lg\:p-1 {
                padding: .2rem
            }

            .lg\:p-2 {
                padding: .4rem
            }

            .lg\:p-3 {
                padding: .8rem
            }

            .lg\:p-4 {
                padding: 1.6rem
            }

            .lg\:p-5 {
                padding: 3.2rem
            }

            .lg\:p-6 {
                padding: 6.4rem
            }

            .lg\:p-7 {
                padding: 12.8rem
            }

            .lg\:p-8 {
                padding: 25.6rem
            }

            .lg\:p-auto {
                padding: auto
            }

            .lg\:p-px {
                padding: 1px
            }

            .lg\:py-0 {
                padding-top: 0;
                padding-bottom: 0
            }

            .lg\:px-0 {
                padding-left: 0;
                padding-right: 0
            }

            .lg\:py-1 {
                padding-top: .2rem;
                padding-bottom: .2rem
            }

            .lg\:px-1 {
                padding-left: .2rem;
                padding-right: .2rem
            }

            .lg\:py-2 {
                padding-top: .4rem;
                padding-bottom: .4rem
            }

            .lg\:px-2 {
                padding-left: .4rem;
                padding-right: .4rem
            }

            .lg\:py-3 {
                padding-top: .8rem;
                padding-bottom: .8rem
            }

            .lg\:px-3 {
                padding-left: .8rem;
                padding-right: .8rem
            }

            .lg\:py-4 {
                padding-top: 1.6rem;
                padding-bottom: 1.6rem
            }

            .lg\:px-4 {
                padding-left: 1.6rem;
                padding-right: 1.6rem
            }

            .lg\:py-5 {
                padding-top: 3.2rem;
                padding-bottom: 3.2rem
            }

            .lg\:px-5 {
                padding-left: 3.2rem;
                padding-right: 3.2rem
            }

            .lg\:py-6 {
                padding-top: 6.4rem;
                padding-bottom: 6.4rem
            }

            .lg\:px-6 {
                padding-left: 6.4rem;
                padding-right: 6.4rem
            }

            .lg\:py-7 {
                padding-top: 12.8rem;
                padding-bottom: 12.8rem
            }

            .lg\:px-7 {
                padding-left: 12.8rem;
                padding-right: 12.8rem
            }

            .lg\:py-8 {
                padding-top: 25.6rem;
                padding-bottom: 25.6rem
            }

            .lg\:px-8 {
                padding-left: 25.6rem;
                padding-right: 25.6rem
            }

            .lg\:py-auto {
                padding-top: auto;
                padding-bottom: auto
            }

            .lg\:px-auto {
                padding-left: auto;
                padding-right: auto
            }

            .lg\:py-px {
                padding-top: 1px;
                padding-bottom: 1px
            }

            .lg\:px-px {
                padding-left: 1px;
                padding-right: 1px
            }

            .lg\:pt-0 {
                padding-top: 0
            }

            .lg\:pr-0 {
                padding-right: 0
            }

            .lg\:pb-0 {
                padding-bottom: 0
            }

            .lg\:pl-0 {
                padding-left: 0
            }

            .lg\:pt-1 {
                padding-top: .2rem
            }

            .lg\:pr-1 {
                padding-right: .2rem
            }

            .lg\:pb-1 {
                padding-bottom: .2rem
            }

            .lg\:pl-1 {
                padding-left: .2rem
            }

            .lg\:pt-2 {
                padding-top: .4rem
            }

            .lg\:pr-2 {
                padding-right: .4rem
            }

            .lg\:pb-2 {
                padding-bottom: .4rem
            }

            .lg\:pl-2 {
                padding-left: .4rem
            }

            .lg\:pt-3 {
                padding-top: .8rem
            }

            .lg\:pr-3 {
                padding-right: .8rem
            }

            .lg\:pb-3 {
                padding-bottom: .8rem
            }

            .lg\:pl-3 {
                padding-left: .8rem
            }

            .lg\:pt-4 {
                padding-top: 1.6rem
            }

            .lg\:pr-4 {
                padding-right: 1.6rem
            }

            .lg\:pb-4 {
                padding-bottom: 1.6rem
            }

            .lg\:pl-4 {
                padding-left: 1.6rem
            }

            .lg\:pt-5 {
                padding-top: 3.2rem
            }

            .lg\:pr-5 {
                padding-right: 3.2rem
            }

            .lg\:pb-5 {
                padding-bottom: 3.2rem
            }

            .lg\:pl-5 {
                padding-left: 3.2rem
            }

            .lg\:pt-6 {
                padding-top: 6.4rem
            }

            .lg\:pr-6 {
                padding-right: 6.4rem
            }

            .lg\:pb-6 {
                padding-bottom: 6.4rem
            }

            .lg\:pl-6 {
                padding-left: 6.4rem
            }

            .lg\:pt-7 {
                padding-top: 12.8rem
            }

            .lg\:pr-7 {
                padding-right: 12.8rem
            }

            .lg\:pb-7 {
                padding-bottom: 12.8rem
            }

            .lg\:pl-7 {
                padding-left: 12.8rem
            }

            .lg\:pt-8 {
                padding-top: 25.6rem
            }

            .lg\:pr-8 {
                padding-right: 25.6rem
            }

            .lg\:pb-8 {
                padding-bottom: 25.6rem
            }

            .lg\:pl-8 {
                padding-left: 25.6rem
            }

            .lg\:pt-auto {
                padding-top: auto
            }

            .lg\:pr-auto {
                padding-right: auto
            }

            .lg\:pb-auto {
                padding-bottom: auto
            }

            .lg\:pl-auto {
                padding-left: auto
            }

            .lg\:pt-px {
                padding-top: 1px
            }

            .lg\:pr-px {
                padding-right: 1px
            }

            .lg\:pb-px {
                padding-bottom: 1px
            }

            .lg\:pl-px {
                padding-left: 1px
            }

            .lg\:text-left {
                text-align: left
            }

            .lg\:text-center {
                text-align: center
            }

            .lg\:text-right {
                text-align: right
            }

            .lg\:text-justify {
                text-align: justify
            }

            .lg\:text-nano {
                font-size: 10px
            }

            .lg\:text-micro {
                font-size: calc(11px + (100vw - 320px)/ 880)
            }

            @media screen and (min-width:1200px) {
                .lg\:text-micro {
                    font-size: 12px
                }
            }

            @media screen and (max-width:320px) {
                .lg\:text-micro {
                    font-size: 11px
                }
            }

            .lg\:text-small {
                font-size: calc(13px + (100vw - 320px)/ 880)
            }

            @media screen and (min-width:1200px) {
                .lg\:text-small {
                    font-size: 14px
                }
            }

            @media screen and (max-width:320px) {
                .lg\:text-small {
                    font-size: 13px
                }
            }

            .lg\:text-base {
                font-size: calc(15px + (100vw - 320px)/ 880)
            }

            @media screen and (min-width:1200px) {
                .lg\:text-base {
                    font-size: 16px
                }
            }

            @media screen and (max-width:320px) {
                .lg\:text-base {
                    font-size: 15px
                }
            }

            .lg\:text-lead {
                font-size: calc(18px + (200vw - 640px)/ 880)
            }

            @media screen and (min-width:1200px) {
                .lg\:text-lead {
                    font-size: 20px
                }
            }

            @media screen and (max-width:320px) {
                .lg\:text-lead {
                    font-size: 18px
                }
            }

            .lg\:text-h6 {
                font-size: 1.46rem
            }

            .lg\:text-h5 {
                font-size: 1.86rem
            }

            .lg\:text-h4 {
                font-size: 2.13rem
            }

            .lg\:text-h3 {
                font-size: 2.6rem
            }

            .lg\:text-h2 {
                font-size: 3.2rem
            }

            .lg\:text-h1 {
                font-size: 4.26rem
            }

            .lg\:w-0 {
                width: 0
            }

            .lg\:w-auto {
                width: auto
            }

            .lg\:w-px {
                width: 1px
            }

            .lg\:w-full {
                width: 100%
            }

            .lg\:w-screen {
                width: 100vw
            }

            .lg\:gap-0 {
                grid-gap: 0;
                gap: 0
            }

            .lg\:gap-1 {
                grid-gap: .2rem;
                gap: .2rem
            }

            .lg\:gap-2 {
                grid-gap: .4rem;
                gap: .4rem
            }

            .lg\:gap-3 {
                grid-gap: .8rem;
                gap: .8rem
            }

            .lg\:gap-4 {
                grid-gap: 1.6rem;
                gap: 1.6rem
            }

            .lg\:gap-5 {
                grid-gap: 3.2rem;
                gap: 3.2rem
            }

            .lg\:gap-6 {
                grid-gap: 6.4rem;
                gap: 6.4rem
            }

            .lg\:gap-7 {
                grid-gap: 12.8rem;
                gap: 12.8rem
            }

            .lg\:gap-8 {
                grid-gap: 25.6rem;
                gap: 25.6rem
            }

            .lg\:gap-auto {
                grid-gap: auto;
                gap: auto
            }

            .lg\:gap-px {
                grid-gap: 1px;
                gap: 1px
            }

            .lg\:col-gap-0 {
                grid-column-gap: 0;
                -moz-column-gap: 0;
                column-gap: 0
            }

            .lg\:col-gap-1 {
                grid-column-gap: .2rem;
                -moz-column-gap: .2rem;
                column-gap: .2rem
            }

            .lg\:col-gap-2 {
                grid-column-gap: .4rem;
                -moz-column-gap: .4rem;
                column-gap: .4rem
            }

            .lg\:col-gap-3 {
                grid-column-gap: .8rem;
                -moz-column-gap: .8rem;
                column-gap: .8rem
            }

            .lg\:col-gap-4 {
                grid-column-gap: 1.6rem;
                -moz-column-gap: 1.6rem;
                column-gap: 1.6rem
            }

            .lg\:col-gap-5 {
                grid-column-gap: 3.2rem;
                -moz-column-gap: 3.2rem;
                column-gap: 3.2rem
            }

            .lg\:col-gap-6 {
                grid-column-gap: 6.4rem;
                -moz-column-gap: 6.4rem;
                column-gap: 6.4rem
            }

            .lg\:col-gap-7 {
                grid-column-gap: 12.8rem;
                -moz-column-gap: 12.8rem;
                column-gap: 12.8rem
            }

            .lg\:col-gap-8 {
                grid-column-gap: 25.6rem;
                -moz-column-gap: 25.6rem;
                column-gap: 25.6rem
            }

            .lg\:col-gap-auto {
                grid-column-gap: auto;
                -moz-column-gap: auto;
                column-gap: auto
            }

            .lg\:col-gap-px {
                grid-column-gap: 1px;
                -moz-column-gap: 1px;
                column-gap: 1px
            }

            .lg\:row-gap-0 {
                grid-row-gap: 0;
                row-gap: 0
            }

            .lg\:row-gap-1 {
                grid-row-gap: .2rem;
                row-gap: .2rem
            }

            .lg\:row-gap-2 {
                grid-row-gap: .4rem;
                row-gap: .4rem
            }

            .lg\:row-gap-3 {
                grid-row-gap: .8rem;
                row-gap: .8rem
            }

            .lg\:row-gap-4 {
                grid-row-gap: 1.6rem;
                row-gap: 1.6rem
            }

            .lg\:row-gap-5 {
                grid-row-gap: 3.2rem;
                row-gap: 3.2rem
            }

            .lg\:row-gap-6 {
                grid-row-gap: 6.4rem;
                row-gap: 6.4rem
            }

            .lg\:row-gap-7 {
                grid-row-gap: 12.8rem;
                row-gap: 12.8rem
            }

            .lg\:row-gap-8 {
                grid-row-gap: 25.6rem;
                row-gap: 25.6rem
            }

            .lg\:row-gap-auto {
                grid-row-gap: auto;
                row-gap: auto
            }

            .lg\:row-gap-px {
                grid-row-gap: 1px;
                row-gap: 1px
            }

            .lg\:grid-flow-row {
                grid-auto-flow: row
            }

            .lg\:grid-flow-col {
                grid-auto-flow: column
            }

            .lg\:grid-flow-row-dense {
                grid-auto-flow: row dense
            }

            .lg\:grid-flow-col-dense {
                grid-auto-flow: column dense
            }

            .lg\:col-auto {
                grid-column: auto
            }

            .lg\:col-span-1 {
                grid-column: span 1/span 1
            }

            .lg\:col-span-2 {
                grid-column: span 2/span 2
            }

            .lg\:col-span-3 {
                grid-column: span 3/span 3
            }

            .lg\:col-span-4 {
                grid-column: span 4/span 4
            }

            .lg\:col-span-5 {
                grid-column: span 5/span 5
            }

            .lg\:col-span-6 {
                grid-column: span 6/span 6
            }

            .lg\:col-span-7 {
                grid-column: span 7/span 7
            }

            .lg\:col-span-8 {
                grid-column: span 8/span 8
            }

            .lg\:col-span-9 {
                grid-column: span 9/span 9
            }

            .lg\:col-span-10 {
                grid-column: span 10/span 10
            }

            .lg\:col-span-11 {
                grid-column: span 11/span 11
            }

            .lg\:col-span-12 {
                grid-column: span 12/span 12
            }

            .lg\:col-start-1 {
                grid-column-start: 1
            }

            .lg\:col-start-2 {
                grid-column-start: 2
            }

            .lg\:col-start-3 {
                grid-column-start: 3
            }

            .lg\:col-start-4 {
                grid-column-start: 4
            }

            .lg\:col-start-5 {
                grid-column-start: 5
            }

            .lg\:col-start-6 {
                grid-column-start: 6
            }

            .lg\:col-start-7 {
                grid-column-start: 7
            }

            .lg\:col-start-8 {
                grid-column-start: 8
            }

            .lg\:col-start-9 {
                grid-column-start: 9
            }

            .lg\:col-start-10 {
                grid-column-start: 10
            }

            .lg\:col-start-11 {
                grid-column-start: 11
            }

            .lg\:col-start-12 {
                grid-column-start: 12
            }

            .lg\:col-start-13 {
                grid-column-start: 13
            }

            .lg\:col-start-auto {
                grid-column-start: auto
            }

            .lg\:col-end-1 {
                grid-column-end: 1
            }

            .lg\:col-end-2 {
                grid-column-end: 2
            }

            .lg\:col-end-3 {
                grid-column-end: 3
            }

            .lg\:col-end-4 {
                grid-column-end: 4
            }

            .lg\:col-end-5 {
                grid-column-end: 5
            }

            .lg\:col-end-6 {
                grid-column-end: 6
            }

            .lg\:col-end-7 {
                grid-column-end: 7
            }

            .lg\:col-end-8 {
                grid-column-end: 8
            }

            .lg\:col-end-9 {
                grid-column-end: 9
            }

            .lg\:col-end-10 {
                grid-column-end: 10
            }

            .lg\:col-end-11 {
                grid-column-end: 11
            }

            .lg\:col-end-12 {
                grid-column-end: 12
            }

            .lg\:col-end-13 {
                grid-column-end: 13
            }

            .lg\:col-end-auto {
                grid-column-end: auto
            }

            .lg\:grid-rows-1 {
                grid-template-rows: repeat(1, minmax(0, 1fr))
            }

            .lg\:grid-rows-2 {
                grid-template-rows: repeat(2, minmax(0, 1fr))
            }

            .lg\:grid-rows-3 {
                grid-template-rows: repeat(3, minmax(0, 1fr))
            }

            .lg\:grid-rows-4 {
                grid-template-rows: repeat(4, minmax(0, 1fr))
            }

            .lg\:grid-rows-5 {
                grid-template-rows: repeat(5, minmax(0, 1fr))
            }

            .lg\:grid-rows-6 {
                grid-template-rows: repeat(6, minmax(0, 1fr))
            }

            .lg\:grid-rows-none {
                grid-template-rows: none
            }

            .lg\:row-auto {
                grid-row: auto
            }

            .lg\:row-span-1 {
                grid-row: span 1/span 1
            }

            .lg\:row-span-2 {
                grid-row: span 2/span 2
            }

            .lg\:row-span-3 {
                grid-row: span 3/span 3
            }

            .lg\:row-span-4 {
                grid-row: span 4/span 4
            }

            .lg\:row-span-5 {
                grid-row: span 5/span 5
            }

            .lg\:row-span-6 {
                grid-row: span 6/span 6
            }

            .lg\:row-start-1 {
                grid-row-start: 1
            }

            .lg\:row-start-2 {
                grid-row-start: 2
            }

            .lg\:row-start-3 {
                grid-row-start: 3
            }

            .lg\:row-start-4 {
                grid-row-start: 4
            }

            .lg\:row-start-5 {
                grid-row-start: 5
            }

            .lg\:row-start-6 {
                grid-row-start: 6
            }

            .lg\:row-start-7 {
                grid-row-start: 7
            }

            .lg\:row-start-auto {
                grid-row-start: auto
            }

            .lg\:row-end-1 {
                grid-row-end: 1
            }

            .lg\:row-end-2 {
                grid-row-end: 2
            }

            .lg\:row-end-3 {
                grid-row-end: 3
            }

            .lg\:row-end-4 {
                grid-row-end: 4
            }

            .lg\:row-end-5 {
                grid-row-end: 5
            }

            .lg\:row-end-6 {
                grid-row-end: 6
            }

            .lg\:row-end-7 {
                grid-row-end: 7
            }

            .lg\:row-end-auto {
                grid-row-end: auto
            }

            .lg\:transform {
                --transform-translate-x: 0;
                --transform-translate-y: 0;
                --transform-rotate: 0;
                --transform-skew-x: 0;
                --transform-skew-y: 0;
                --transform-scale-x: 1;
                --transform-scale-y: 1;
                transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))
            }

            .lg\:transform-none {
                transform: none
            }

            .lg\:origin-center {
                transform-origin: center
            }

            .lg\:origin-top {
                transform-origin: top
            }

            .lg\:origin-top-right {
                transform-origin: top right
            }

            .lg\:origin-right {
                transform-origin: right
            }

            .lg\:origin-bottom-right {
                transform-origin: bottom right
            }

            .lg\:origin-bottom {
                transform-origin: bottom
            }

            .lg\:origin-bottom-left {
                transform-origin: bottom left
            }

            .lg\:origin-left {
                transform-origin: left
            }

            .lg\:origin-top-left {
                transform-origin: top left
            }

            .lg\:rotate-0 {
                --transform-rotate: 0
            }

            .lg\:rotate-45 {
                --transform-rotate: 45deg
            }

            .lg\:rotate-90 {
                --transform-rotate: 90deg
            }

            .lg\:rotate-180 {
                --transform-rotate: 180deg
            }

            .lg\:-rotate-180 {
                --transform-rotate: -180deg
            }

            .lg\:-rotate-90 {
                --transform-rotate: -90deg
            }

            .lg\:-rotate-45 {
                --transform-rotate: -45deg
            }

            .lg\:hover\:rotate-0:hover {
                --transform-rotate: 0
            }

            .lg\:hover\:rotate-45:hover {
                --transform-rotate: 45deg
            }

            .lg\:hover\:rotate-90:hover {
                --transform-rotate: 90deg
            }

            .lg\:hover\:rotate-180:hover {
                --transform-rotate: 180deg
            }

            .lg\:hover\:-rotate-180:hover {
                --transform-rotate: -180deg
            }

            .lg\:hover\:-rotate-90:hover {
                --transform-rotate: -90deg
            }

            .lg\:hover\:-rotate-45:hover {
                --transform-rotate: -45deg
            }

            .lg\:focus\:rotate-0:focus {
                --transform-rotate: 0
            }

            .lg\:focus\:rotate-45:focus {
                --transform-rotate: 45deg
            }

            .lg\:focus\:rotate-90:focus {
                --transform-rotate: 90deg
            }

            .lg\:focus\:rotate-180:focus {
                --transform-rotate: 180deg
            }

            .lg\:focus\:-rotate-180:focus {
                --transform-rotate: -180deg
            }

            .lg\:focus\:-rotate-90:focus {
                --transform-rotate: -90deg
            }

            .lg\:focus\:-rotate-45:focus {
                --transform-rotate: -45deg
            }

            .lg\:translate-x-0 {
                --transform-translate-x: 0
            }

            .lg\:translate-x-1 {
                --transform-translate-x: 0.2rem
            }

            .lg\:translate-x-2 {
                --transform-translate-x: 0.4rem
            }

            .lg\:translate-x-3 {
                --transform-translate-x: 0.8rem
            }

            .lg\:translate-x-4 {
                --transform-translate-x: 1.6rem
            }

            .lg\:translate-x-5 {
                --transform-translate-x: 3.2rem
            }

            .lg\:translate-x-6 {
                --transform-translate-x: 6.4rem
            }

            .lg\:translate-x-7 {
                --transform-translate-x: 12.8rem
            }

            .lg\:translate-x-8 {
                --transform-translate-x: 25.6rem
            }

            .lg\:translate-x-auto {
                --transform-translate-x: auto
            }

            .lg\:translate-x-px {
                --transform-translate-x: 1px
            }

            .lg\:-translate-x-1 {
                --transform-translate-x: -0.2rem
            }

            .lg\:-translate-x-2 {
                --transform-translate-x: -0.4rem
            }

            .lg\:-translate-x-3 {
                --transform-translate-x: -0.8rem
            }

            .lg\:-translate-x-4 {
                --transform-translate-x: -1.6rem
            }

            .lg\:-translate-x-5 {
                --transform-translate-x: -3.2rem
            }

            .lg\:-translate-x-6 {
                --transform-translate-x: -6.4rem
            }

            .lg\:-translate-x-7 {
                --transform-translate-x: -12.8rem
            }

            .lg\:-translate-x-8 {
                --transform-translate-x: -25.6rem
            }

            .lg\:-translate-x-auto {
                --transform-translate-x: auto
            }

            .lg\:-translate-x-px {
                --transform-translate-x: -1px
            }

            .lg\:-translate-x-full {
                --transform-translate-x: -100%
            }

            .lg\:-translate-x-1\/2 {
                --transform-translate-x: -50%
            }

            .lg\:translate-x-1\/2 {
                --transform-translate-x: 50%
            }

            .lg\:translate-x-full {
                --transform-translate-x: 100%
            }

            .lg\:translate-y-0 {
                --transform-translate-y: 0
            }

            .lg\:translate-y-1 {
                --transform-translate-y: 0.2rem
            }

            .lg\:translate-y-2 {
                --transform-translate-y: 0.4rem
            }

            .lg\:translate-y-3 {
                --transform-translate-y: 0.8rem
            }

            .lg\:translate-y-4 {
                --transform-translate-y: 1.6rem
            }

            .lg\:translate-y-5 {
                --transform-translate-y: 3.2rem
            }

            .lg\:translate-y-6 {
                --transform-translate-y: 6.4rem
            }

            .lg\:translate-y-7 {
                --transform-translate-y: 12.8rem
            }

            .lg\:translate-y-8 {
                --transform-translate-y: 25.6rem
            }

            .lg\:translate-y-auto {
                --transform-translate-y: auto
            }

            .lg\:translate-y-px {
                --transform-translate-y: 1px
            }

            .lg\:-translate-y-1 {
                --transform-translate-y: -0.2rem
            }

            .lg\:-translate-y-2 {
                --transform-translate-y: -0.4rem
            }

            .lg\:-translate-y-3 {
                --transform-translate-y: -0.8rem
            }

            .lg\:-translate-y-4 {
                --transform-translate-y: -1.6rem
            }

            .lg\:-translate-y-5 {
                --transform-translate-y: -3.2rem
            }

            .lg\:-translate-y-6 {
                --transform-translate-y: -6.4rem
            }

            .lg\:-translate-y-7 {
                --transform-translate-y: -12.8rem
            }

            .lg\:-translate-y-8 {
                --transform-translate-y: -25.6rem
            }

            .lg\:-translate-y-auto {
                --transform-translate-y: auto
            }

            .lg\:-translate-y-px {
                --transform-translate-y: -1px
            }

            .lg\:-translate-y-full {
                --transform-translate-y: -100%
            }

            .lg\:-translate-y-1\/2 {
                --transform-translate-y: -50%
            }

            .lg\:translate-y-1\/2 {
                --transform-translate-y: 50%
            }

            .lg\:translate-y-full {
                --transform-translate-y: 100%
            }

            .lg\:hover\:translate-x-0:hover {
                --transform-translate-x: 0
            }

            .lg\:hover\:translate-x-1:hover {
                --transform-translate-x: 0.2rem
            }

            .lg\:hover\:translate-x-2:hover {
                --transform-translate-x: 0.4rem
            }

            .lg\:hover\:translate-x-3:hover {
                --transform-translate-x: 0.8rem
            }

            .lg\:hover\:translate-x-4:hover {
                --transform-translate-x: 1.6rem
            }

            .lg\:hover\:translate-x-5:hover {
                --transform-translate-x: 3.2rem
            }

            .lg\:hover\:translate-x-6:hover {
                --transform-translate-x: 6.4rem
            }

            .lg\:hover\:translate-x-7:hover {
                --transform-translate-x: 12.8rem
            }

            .lg\:hover\:translate-x-8:hover {
                --transform-translate-x: 25.6rem
            }

            .lg\:hover\:translate-x-auto:hover {
                --transform-translate-x: auto
            }

            .lg\:hover\:translate-x-px:hover {
                --transform-translate-x: 1px
            }

            .lg\:hover\:-translate-x-1:hover {
                --transform-translate-x: -0.2rem
            }

            .lg\:hover\:-translate-x-2:hover {
                --transform-translate-x: -0.4rem
            }

            .lg\:hover\:-translate-x-3:hover {
                --transform-translate-x: -0.8rem
            }

            .lg\:hover\:-translate-x-4:hover {
                --transform-translate-x: -1.6rem
            }

            .lg\:hover\:-translate-x-5:hover {
                --transform-translate-x: -3.2rem
            }

            .lg\:hover\:-translate-x-6:hover {
                --transform-translate-x: -6.4rem
            }

            .lg\:hover\:-translate-x-7:hover {
                --transform-translate-x: -12.8rem
            }

            .lg\:hover\:-translate-x-8:hover {
                --transform-translate-x: -25.6rem
            }

            .lg\:hover\:-translate-x-auto:hover {
                --transform-translate-x: auto
            }

            .lg\:hover\:-translate-x-px:hover {
                --transform-translate-x: -1px
            }

            .lg\:hover\:-translate-x-full:hover {
                --transform-translate-x: -100%
            }

            .lg\:hover\:-translate-x-1\/2:hover {
                --transform-translate-x: -50%
            }

            .lg\:hover\:translate-x-1\/2:hover {
                --transform-translate-x: 50%
            }

            .lg\:hover\:translate-x-full:hover {
                --transform-translate-x: 100%
            }

            .lg\:hover\:translate-y-0:hover {
                --transform-translate-y: 0
            }

            .lg\:hover\:translate-y-1:hover {
                --transform-translate-y: 0.2rem
            }

            .lg\:hover\:translate-y-2:hover {
                --transform-translate-y: 0.4rem
            }

            .lg\:hover\:translate-y-3:hover {
                --transform-translate-y: 0.8rem
            }

            .lg\:hover\:translate-y-4:hover {
                --transform-translate-y: 1.6rem
            }

            .lg\:hover\:translate-y-5:hover {
                --transform-translate-y: 3.2rem
            }

            .lg\:hover\:translate-y-6:hover {
                --transform-translate-y: 6.4rem
            }

            .lg\:hover\:translate-y-7:hover {
                --transform-translate-y: 12.8rem
            }

            .lg\:hover\:translate-y-8:hover {
                --transform-translate-y: 25.6rem
            }

            .lg\:hover\:translate-y-auto:hover {
                --transform-translate-y: auto
            }

            .lg\:hover\:translate-y-px:hover {
                --transform-translate-y: 1px
            }

            .lg\:hover\:-translate-y-1:hover {
                --transform-translate-y: -0.2rem
            }

            .lg\:hover\:-translate-y-2:hover {
                --transform-translate-y: -0.4rem
            }

            .lg\:hover\:-translate-y-3:hover {
                --transform-translate-y: -0.8rem
            }

            .lg\:hover\:-translate-y-4:hover {
                --transform-translate-y: -1.6rem
            }

            .lg\:hover\:-translate-y-5:hover {
                --transform-translate-y: -3.2rem
            }

            .lg\:hover\:-translate-y-6:hover {
                --transform-translate-y: -6.4rem
            }

            .lg\:hover\:-translate-y-7:hover {
                --transform-translate-y: -12.8rem
            }

            .lg\:hover\:-translate-y-8:hover {
                --transform-translate-y: -25.6rem
            }

            .lg\:hover\:-translate-y-auto:hover {
                --transform-translate-y: auto
            }

            .lg\:hover\:-translate-y-px:hover {
                --transform-translate-y: -1px
            }

            .lg\:hover\:-translate-y-full:hover {
                --transform-translate-y: -100%
            }

            .lg\:hover\:-translate-y-1\/2:hover {
                --transform-translate-y: -50%
            }

            .lg\:hover\:translate-y-1\/2:hover {
                --transform-translate-y: 50%
            }

            .lg\:hover\:translate-y-full:hover {
                --transform-translate-y: 100%
            }

            .lg\:focus\:translate-x-0:focus {
                --transform-translate-x: 0
            }

            .lg\:focus\:translate-x-1:focus {
                --transform-translate-x: 0.2rem
            }

            .lg\:focus\:translate-x-2:focus {
                --transform-translate-x: 0.4rem
            }

            .lg\:focus\:translate-x-3:focus {
                --transform-translate-x: 0.8rem
            }

            .lg\:focus\:translate-x-4:focus {
                --transform-translate-x: 1.6rem
            }

            .lg\:focus\:translate-x-5:focus {
                --transform-translate-x: 3.2rem
            }

            .lg\:focus\:translate-x-6:focus {
                --transform-translate-x: 6.4rem
            }

            .lg\:focus\:translate-x-7:focus {
                --transform-translate-x: 12.8rem
            }

            .lg\:focus\:translate-x-8:focus {
                --transform-translate-x: 25.6rem
            }

            .lg\:focus\:translate-x-auto:focus {
                --transform-translate-x: auto
            }

            .lg\:focus\:translate-x-px:focus {
                --transform-translate-x: 1px
            }

            .lg\:focus\:-translate-x-1:focus {
                --transform-translate-x: -0.2rem
            }

            .lg\:focus\:-translate-x-2:focus {
                --transform-translate-x: -0.4rem
            }

            .lg\:focus\:-translate-x-3:focus {
                --transform-translate-x: -0.8rem
            }

            .lg\:focus\:-translate-x-4:focus {
                --transform-translate-x: -1.6rem
            }

            .lg\:focus\:-translate-x-5:focus {
                --transform-translate-x: -3.2rem
            }

            .lg\:focus\:-translate-x-6:focus {
                --transform-translate-x: -6.4rem
            }

            .lg\:focus\:-translate-x-7:focus {
                --transform-translate-x: -12.8rem
            }

            .lg\:focus\:-translate-x-8:focus {
                --transform-translate-x: -25.6rem
            }

            .lg\:focus\:-translate-x-auto:focus {
                --transform-translate-x: auto
            }

            .lg\:focus\:-translate-x-px:focus {
                --transform-translate-x: -1px
            }

            .lg\:focus\:-translate-x-full:focus {
                --transform-translate-x: -100%
            }

            .lg\:focus\:-translate-x-1\/2:focus {
                --transform-translate-x: -50%
            }

            .lg\:focus\:translate-x-1\/2:focus {
                --transform-translate-x: 50%
            }

            .lg\:focus\:translate-x-full:focus {
                --transform-translate-x: 100%
            }

            .lg\:focus\:translate-y-0:focus {
                --transform-translate-y: 0
            }

            .lg\:focus\:translate-y-1:focus {
                --transform-translate-y: 0.2rem
            }

            .lg\:focus\:translate-y-2:focus {
                --transform-translate-y: 0.4rem
            }

            .lg\:focus\:translate-y-3:focus {
                --transform-translate-y: 0.8rem
            }

            .lg\:focus\:translate-y-4:focus {
                --transform-translate-y: 1.6rem
            }

            .lg\:focus\:translate-y-5:focus {
                --transform-translate-y: 3.2rem
            }

            .lg\:focus\:translate-y-6:focus {
                --transform-translate-y: 6.4rem
            }

            .lg\:focus\:translate-y-7:focus {
                --transform-translate-y: 12.8rem
            }

            .lg\:focus\:translate-y-8:focus {
                --transform-translate-y: 25.6rem
            }

            .lg\:focus\:translate-y-auto:focus {
                --transform-translate-y: auto
            }

            .lg\:focus\:translate-y-px:focus {
                --transform-translate-y: 1px
            }

            .lg\:focus\:-translate-y-1:focus {
                --transform-translate-y: -0.2rem
            }

            .lg\:focus\:-translate-y-2:focus {
                --transform-translate-y: -0.4rem
            }

            .lg\:focus\:-translate-y-3:focus {
                --transform-translate-y: -0.8rem
            }

            .lg\:focus\:-translate-y-4:focus {
                --transform-translate-y: -1.6rem
            }

            .lg\:focus\:-translate-y-5:focus {
                --transform-translate-y: -3.2rem
            }

            .lg\:focus\:-translate-y-6:focus {
                --transform-translate-y: -6.4rem
            }

            .lg\:focus\:-translate-y-7:focus {
                --transform-translate-y: -12.8rem
            }

            .lg\:focus\:-translate-y-8:focus {
                --transform-translate-y: -25.6rem
            }

            .lg\:focus\:-translate-y-auto:focus {
                --transform-translate-y: auto
            }

            .lg\:focus\:-translate-y-px:focus {
                --transform-translate-y: -1px
            }

            .lg\:focus\:-translate-y-full:focus {
                --transform-translate-y: -100%
            }

            .lg\:focus\:-translate-y-1\/2:focus {
                --transform-translate-y: -50%
            }

            .lg\:focus\:translate-y-1\/2:focus {
                --transform-translate-y: 50%
            }

            .lg\:focus\:translate-y-full:focus {
                --transform-translate-y: 100%
            }

            .lg\:skew-x-0 {
                --transform-skew-x: 0
            }

            .lg\:skew-x-3 {
                --transform-skew-x: 3deg
            }

            .lg\:skew-x-6 {
                --transform-skew-x: 6deg
            }

            .lg\:skew-x-12 {
                --transform-skew-x: 12deg
            }

            .lg\:-skew-x-12 {
                --transform-skew-x: -12deg
            }

            .lg\:-skew-x-6 {
                --transform-skew-x: -6deg
            }

            .lg\:-skew-x-3 {
                --transform-skew-x: -3deg
            }

            .lg\:skew-y-0 {
                --transform-skew-y: 0
            }

            .lg\:skew-y-3 {
                --transform-skew-y: 3deg
            }

            .lg\:skew-y-6 {
                --transform-skew-y: 6deg
            }

            .lg\:skew-y-12 {
                --transform-skew-y: 12deg
            }

            .lg\:-skew-y-12 {
                --transform-skew-y: -12deg
            }

            .lg\:-skew-y-6 {
                --transform-skew-y: -6deg
            }

            .lg\:-skew-y-3 {
                --transform-skew-y: -3deg
            }

            .lg\:hover\:skew-x-0:hover {
                --transform-skew-x: 0
            }

            .lg\:hover\:skew-x-3:hover {
                --transform-skew-x: 3deg
            }

            .lg\:hover\:skew-x-6:hover {
                --transform-skew-x: 6deg
            }

            .lg\:hover\:skew-x-12:hover {
                --transform-skew-x: 12deg
            }

            .lg\:hover\:-skew-x-12:hover {
                --transform-skew-x: -12deg
            }

            .lg\:hover\:-skew-x-6:hover {
                --transform-skew-x: -6deg
            }

            .lg\:hover\:-skew-x-3:hover {
                --transform-skew-x: -3deg
            }

            .lg\:hover\:skew-y-0:hover {
                --transform-skew-y: 0
            }

            .lg\:hover\:skew-y-3:hover {
                --transform-skew-y: 3deg
            }

            .lg\:hover\:skew-y-6:hover {
                --transform-skew-y: 6deg
            }

            .lg\:hover\:skew-y-12:hover {
                --transform-skew-y: 12deg
            }

            .lg\:hover\:-skew-y-12:hover {
                --transform-skew-y: -12deg
            }

            .lg\:hover\:-skew-y-6:hover {
                --transform-skew-y: -6deg
            }

            .lg\:hover\:-skew-y-3:hover {
                --transform-skew-y: -3deg
            }

            .lg\:focus\:skew-x-0:focus {
                --transform-skew-x: 0
            }

            .lg\:focus\:skew-x-3:focus {
                --transform-skew-x: 3deg
            }

            .lg\:focus\:skew-x-6:focus {
                --transform-skew-x: 6deg
            }

            .lg\:focus\:skew-x-12:focus {
                --transform-skew-x: 12deg
            }

            .lg\:focus\:-skew-x-12:focus {
                --transform-skew-x: -12deg
            }

            .lg\:focus\:-skew-x-6:focus {
                --transform-skew-x: -6deg
            }

            .lg\:focus\:-skew-x-3:focus {
                --transform-skew-x: -3deg
            }

            .lg\:focus\:skew-y-0:focus {
                --transform-skew-y: 0
            }

            .lg\:focus\:skew-y-3:focus {
                --transform-skew-y: 3deg
            }

            .lg\:focus\:skew-y-6:focus {
                --transform-skew-y: 6deg
            }

            .lg\:focus\:skew-y-12:focus {
                --transform-skew-y: 12deg
            }

            .lg\:focus\:-skew-y-12:focus {
                --transform-skew-y: -12deg
            }

            .lg\:focus\:-skew-y-6:focus {
                --transform-skew-y: -6deg
            }

            .lg\:focus\:-skew-y-3:focus {
                --transform-skew-y: -3deg
            }

            .lg\:container-fluid {
                width: 100%;
                padding-right: 16px;
                padding-left: 16px;
                margin-right: auto;
                margin-left: auto
            }

            .lg\:col {
                flex-basis: 0;
                flex-grow: 1;
                max-width: 100%
            }

            .lg\:col-auto {
                flex: 0 0 auto;
                width: auto;
                max-width: 100%
            }

            .lg\:col-1 {
                flex: 0 0 8.333333333333334%;
                max-width: 8.333333333333334%
            }

            .lg\:col-2 {
                flex: 0 0 16.666666666666668%;
                max-width: 16.666666666666668%
            }

            .lg\:col-3 {
                flex: 0 0 25%;
                max-width: 25%
            }

            .lg\:col-4 {
                flex: 0 0 33.333333333333336%;
                max-width: 33.333333333333336%
            }

            .lg\:col-5 {
                flex: 0 0 41.66666666666667%;
                max-width: 41.66666666666667%
            }

            .lg\:col-6 {
                flex: 0 0 50%;
                max-width: 50%
            }

            .lg\:col-7 {
                flex: 0 0 58.333333333333336%;
                max-width: 58.333333333333336%
            }

            .lg\:col-8 {
                flex: 0 0 66.66666666666667%;
                max-width: 66.66666666666667%
            }

            .lg\:col-9 {
                flex: 0 0 75%;
                max-width: 75%
            }

            .lg\:col-10 {
                flex: 0 0 83.33333333333334%;
                max-width: 83.33333333333334%
            }

            .lg\:col-11 {
                flex: 0 0 91.66666666666667%;
                max-width: 91.66666666666667%
            }

            .lg\:col-12 {
                flex: 0 0 100%;
                max-width: 100%
            }

            .lg\:order-first {
                order: -1
            }

            .lg\:order-last {
                order: 13
            }

            .lg\:order-0 {
                order: 0
            }

            .lg\:order-1 {
                order: 1
            }

            .lg\:order-2 {
                order: 2
            }

            .lg\:order-3 {
                order: 3
            }

            .lg\:order-4 {
                order: 4
            }

            .lg\:order-5 {
                order: 5
            }

            .lg\:order-6 {
                order: 6
            }

            .lg\:order-7 {
                order: 7
            }

            .lg\:order-8 {
                order: 8
            }

            .lg\:order-9 {
                order: 9
            }

            .lg\:order-10 {
                order: 10
            }

            .lg\:order-11 {
                order: 11
            }

            .lg\:order-12 {
                order: 12
            }

            [dir=ltr] .lg\:offset-0 {
                margin-left: 0
            }

            [dir=rtl] .lg\:offset-0 {
                margin-right: 0
            }

            [dir=ltr] .lg\:offset-1 {
                margin-left: 8.333333333333334%
            }

            [dir=rtl] .lg\:offset-1 {
                margin-right: 8.333333333333334%
            }

            [dir=ltr] .lg\:offset-2 {
                margin-left: 16.666666666666668%
            }

            [dir=rtl] .lg\:offset-2 {
                margin-right: 16.666666666666668%
            }

            [dir=ltr] .lg\:offset-3 {
                margin-left: 25%
            }

            [dir=rtl] .lg\:offset-3 {
                margin-right: 25%
            }

            [dir=ltr] .lg\:offset-4 {
                margin-left: 33.333333333333336%
            }

            [dir=rtl] .lg\:offset-4 {
                margin-right: 33.333333333333336%
            }

            [dir=ltr] .lg\:offset-5 {
                margin-left: 41.66666666666667%
            }

            [dir=rtl] .lg\:offset-5 {
                margin-right: 41.66666666666667%
            }

            [dir=ltr] .lg\:offset-6 {
                margin-left: 50%
            }

            [dir=rtl] .lg\:offset-6 {
                margin-right: 50%
            }

            [dir=ltr] .lg\:offset-7 {
                margin-left: 58.333333333333336%
            }

            [dir=rtl] .lg\:offset-7 {
                margin-right: 58.333333333333336%
            }

            [dir=ltr] .lg\:offset-8 {
                margin-left: 66.66666666666667%
            }

            [dir=rtl] .lg\:offset-8 {
                margin-right: 66.66666666666667%
            }

            [dir=ltr] .lg\:offset-9 {
                margin-left: 75%
            }

            [dir=rtl] .lg\:offset-9 {
                margin-right: 75%
            }

            [dir=ltr] .lg\:offset-10 {
                margin-left: 83.33333333333334%
            }

            [dir=rtl] .lg\:offset-10 {
                margin-right: 83.33333333333334%
            }

            [dir=ltr] .lg\:offset-11 {
                margin-left: 91.66666666666667%
            }

            [dir=rtl] .lg\:offset-11 {
                margin-right: 91.66666666666667%
            }
        }

        .nord-button {
            touch-action: manipulation;
            border-style: solid;
            padding: .8rem 1.8rem
        }

        .nord-button--small {
            padding: .4rem 1.2rem
        }

        .nord-button:disabled * {
            pointer-events: none
        }

        .nord-button--v-contained.nord-button--c-grey:hover:not(:focus):not(:active):not([disabled]) {
            background-color: #b9babd;
            border-color: #b9babd
        }

        .nord-button--v-contained.nord-button--c-grey:focus {
            background-color: #44474e;
            border-color: #383c43
        }

        .nord-button--v-contained.nord-button--c-grey:active:not([disabled]) {
            background-color: #383c43;
            border-color: #383c43
        }

        .nord-button--v-contained.nord-button--c-blue:hover:not(:focus):not(:active):not([disabled]) {
            background-color: #77a7ff;
            border-color: #77a7ff
        }

        .nord-button--v-contained.nord-button--c-blue:focus {
            background-color: #4687ff;
            border-color: #0e1b33
        }

        .nord-button--v-contained.nord-button--c-blue:active:not([disabled]) {
            background-color: #0e1b33;
            border-color: #0e1b33
        }

        .nord-button--v-contained.nord-button--c-red:hover:not(:focus):not(:active):not([disabled]) {
            background-color: #f86e80;
            border-color: #f86e80
        }

        .nord-button--v-contained.nord-button--c-red:focus {
            background-color: #f64f64;
            border-color: #850a1b
        }

        .nord-button--v-contained.nord-button--c-red:active:not([disabled]) {
            background-color: #850a1b;
            border-color: #850a1b
        }

        .OrDivider {
            align-items: center;
            justify-content: center;
            flex-direction: row
        }

        .OrDivider hr {
            height: 1px;
            border-color: #bdd4ff;
            width: 24px;
            margin: 14px;
            transform: rotate(0)
        }

        @media (min-width:992px) {
            .OrDivider {
                flex-direction: column
            }

            .OrDivider hr {
                transform: rotate(90deg)
            }
        }
    </style>
    <meta name="generator" content="Gatsby 2.24.47" />
    <script>!function (e) { "function" == typeof define && define.amd ? define(e) : e() }(function () { "use strict"; var e, t = (function (e, t) { var n; n = function () { function e() { for (var e = 0, t = {}; e < arguments.length; e++) { var n = arguments[e]; for (var o in n) t[o] = n[o] } return t } function t(e) { return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) } return function n(o) { function r() { } function c(t, n, c) { if ("undefined" != typeof document) { "number" == typeof (c = e({ path: "/" }, r.defaults, c)).expires && (c.expires = new Date(1 * new Date + 864e5 * c.expires)), c.expires = c.expires ? c.expires.toUTCString() : ""; try { var a = JSON.stringify(n); /^[\{\[]/.test(a) && (n = a) } catch (e) { } n = o.write ? o.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape); var i = ""; for (var u in c) c[u] && (i += "; " + u, !0 !== c[u] && (i += "=" + c[u].split(";")[0])); return document.cookie = t + "=" + n + i } } function a(e, n) { if ("undefined" != typeof document) { for (var r = {}, c = document.cookie ? document.cookie.split("; ") : [], a = 0; a < c.length; a++) { var i = c[a].split("="), u = i.slice(1).join("="); n || '"' !== u.charAt(0) || (u = u.slice(1, -1)); try { var s = t(i[0]); if (u = (o.read || o)(u, s) || t(u), n) try { u = JSON.parse(u) } catch (e) { } if (r[s] = u, e === s) break } catch (e) { } } return e ? r[e] : r } } return r.set = c, r.get = function (e) { return a(e, !1) }, r.getJSON = function (e) { return a(e, !0) }, r.remove = function (t, n) { c(t, "", e(n, { expires: -1 })) }, r.defaults = {}, r.withConverter = n, r }(function () { }) }, e.exports = n() }(e = { exports: {} }, e.exports), e.exports), n = function () { try { return function () { for (var e = "_domainTest".concat((new Date).getTime()), t = document.location.hostname, n = 0, o = t.split("."); n < o.length - 1 && -1 === document.cookie.indexOf("".concat(e, "=1"));)n += 1, t = o.slice(-1 - n).join("."), document.cookie = "".concat(e, "=1;domain=").concat(t, ";"); return document.cookie = "".concat(e, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=").concat(t, ";"), t }() } catch (e) { return null } }; function o() { try { localStorage.setItem("test", "test"), localStorage.removeItem("test") } catch (e) { return !1 } return !0 } !function (e) { var r = "".concat(e || "https://s1.nordcdn.com/nord/misc/0.4.0/common/", "fonts/gordita/"), c = "fontsCssCache", a = 7, i = "".concat(r, "woff.css"); function u(e) { document.getElementsByTagName("head")[0].appendChild(e) } function s(e) { var t = document.createElement("style"); u(t), t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e } function f(e) { var t = document.createElement("link"); t.href = e, t.rel = "stylesheet", t.type = "text/css", u(t) } function A() { if (o()) { var e = function () { try { var e = localStorage.getItem(c); if (e && t.get(c)) return JSON.parse(e) } catch (e) { return null } return null }(); e ? s(e.contents) : (r = i, u = function (e) { var o = e.readyState, r = e.status, u = e.responseText; 4 === o && (200 === r ? (s(u), function (e, o) { var r = n(); try { var i = JSON.stringify({ url: e, contents: o }); localStorage.setItem(c, i), t.set(c, "true", { expires: a, domain: "".concat("localhost" === r ? "" : ".").concat(r) }) } catch (e) { return !1 } }(i, u)) : f(i)) }, (A = new XMLHttpRequest).open("GET", r, !0), A.onreadystatechange = function () { u(A) }, A.send()) } else f(i); var r, u, A } (function () { if (!("FontFace" in window)) return !1; var e = new FontFace("t", 'url( "data:font/woff2;base64,d09GMgABAAAAAADwAAoAAAAAAiQAAACoAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAALAogOAE2AiQDBgsGAAQgBSAHIBuDAciO1EZ3I/mL5/+5/rfPnTt9/9Qa8H4cUUZxaRbh36LiKJoVh61XGzw6ufkpoeZBW4KphwFYIJGHB4LAY4hby++gW+6N1EN94I49v86yCpUdYgqeZrOWN34CMQg2tAmthdli0eePIwAKNIIRS4AGZFzdX9lbBUAQlm//f262/61o8PlYO/D1/X4FrWFFgdCQD9DpGJSxmFyjOAGUU4P0qigcNb82GAAA" ) format( "woff2" )', {}); return e.load().catch(function () { }), -1 !== ["loading", "loaded"].indexOf(e.status) })() && (i = "".concat(r, "woff2.css")), o() ? A() : window.onload = A }() });
    </script>

    <title data-react-helmet="true">Threat Protection | NordVPN</title>
    <meta data-react-helmet="true" name="description"
        content="Your privacy just got taken to the next level. Introducing triple NordVPN feature upgrade. Click here to find out more!" />
    <meta data-react-helmet="true" property="og:title" content="CyberSec Pro" />
    <meta data-react-helmet="true" property="og:description"
        content="Your privacy just got taken to the next level. Introducing triple NordVPN feature upgrade. Click here to find out more!" />
    <meta data-react-helmet="true" property="og:type" content="website" />
    <meta data-react-helmet="true" name="twitter:card" content="summary" />
    <meta data-react-helmet="true" name="twitter:creator" content="NordVPN" />
    <meta data-react-helmet="true" name="twitter:title" content="CyberSec Pro" />
    <meta data-react-helmet="true" name="twitter:description"
        content="Your privacy just got taken to the next level. Introducing triple NordVPN feature upgrade. Click here to find out more!" />
    <link rel="icon" sizes="192x192"
        href="https://s1.nordcdn.com/nordvpn/media/1.194.0/images/global/favicon/favicon-192x192.png" />
    <link rel="apple-touch-icon"
        href="https://s1.nordcdn.com/nordvpn/media/1.194.0/images/global/favicon/favicon-192x192.png" />
    <meta name="theme-color" content="#0E1B33" />
    <meta name="appVersion" content="1.0.0" />
    <meta name="referrer" content="no-referrer"/>
</head>

<body>
    <div id="___gatsby">
        <div style="outline:none" tabindex="-1" id="gatsby-focus-wrapper">
            <header class="absolute w-full">
                <div class="nord-container container">
                    <div class="nord-row row py-4">
                        <div class="nord-col col">
                            <h1><svg xmlns="http://www.w3.org/2000/svg" width="142" height="31" viewBox="0 0 142 31">
                                    <title>NordVPN logo</title>
                                    <g fill="none" fill-rule="evenodd">
                                        <path fill="#373b42"
                                            d="M139.996 13A1.994 1.994 0 0 1 138 11a2 2 0 1 1 4 0 2 2 0 0 1-2.004 2zm0-3.636c-.896 0-1.617.727-1.617 1.636 0 .91.721 1.636 1.617 1.636.89 0 1.625-.727 1.625-1.636 0-.91-.736-1.636-1.625-1.636zm-.298 1.956v.822h-.474V9.858h.904c.444 0 .816.233.816.72a.661.661 0 0 1-.438.655l.474.909h-.517l-.416-.822h-.35zm.765-.727c0-.226-.19-.284-.372-.284h-.393v.567h.4c.175 0 .365-.072.365-.283zM59.18 24l-6.84-10.26V24H49.3V9.123h3.515l6.46 9.709V9.123h3.04V24H59.18zm4.946-5.054c0-3.021 2.489-5.32 5.567-5.32 3.059 0 5.51 2.242 5.51 5.263 0 3.059-2.489 5.339-5.548 5.339-3.078 0-5.529-2.223-5.529-5.282zm3.04-.038c0 1.539 1.121 2.603 2.508 2.603s2.489-1.064 2.489-2.603c0-1.52-1.121-2.584-2.508-2.584s-2.489 1.064-2.489 2.584zm15.304-5.054v2.907c-.399-.076-.817-.076-.95-.076-1.425 0-2.413.988-2.413 2.869V24H76.2V13.854h2.812v1.482h.038c.551-1.159 1.577-1.596 2.622-1.596.228 0 .589.057.798.114zM91.031 24v-1.292h-.038c-.95 1.387-2.47 1.482-3.154 1.482-2.945 0-4.826-2.546-4.826-5.282 0-2.565 1.957-5.244 4.864-5.244.589 0 1.995.114 3.04 1.349h.038V8.534H93.9V24h-2.869zm0-5.092c0-1.52-1.121-2.565-2.508-2.565s-2.508 1.045-2.508 2.565c0 1.539 1.121 2.603 2.508 2.603s2.508-1.064 2.508-2.603zM100.199 24L94.822 9.123h3.325l3.857 11.305 3.876-11.305h3.268L103.752 24h-3.553zm21.062-10.108c0 3.287-2.318 4.864-5.434 4.864h-2.337V24h-3.078V9.123h5.529c2.983 0 5.32 1.615 5.32 4.769zm-3.097.076c0-1.444-1.216-1.938-2.489-1.938h-2.185v3.857h2.204c1.216 0 2.47-.532 2.47-1.919zM132.69 24l-6.84-10.26V24h-3.04V9.123h3.515l6.46 9.709V9.123h3.04V24h-3.135z">
                                        </path>
                                        <path fill="#4687ff"
                                            d="M3.71 31A19.472 19.472 0 0 1 0 19.534C0 8.745 8.728 0 19.494 0c10.767 0 19.494 8.745 19.494 19.534A19.47 19.47 0 0 1 35.278 31l-9.363-15.235-.904 1.53.917 4.254-6.434-11.03-3.98 6.733.927 4.297-3.373-5.776L3.71 31z">
                                        </path>
                                    </g>
                                </svg></h1>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section class="bg-blue-lightest Hero">
                    <div class="nord-container container pt-5">
                        <div class="nord-row row items-center lg:py-5 pb-6 pt-6 sm:pb-3">
                            <div class="nord-col lg:col-6 text-center lg:text-left">
                                <h4
                                    class="nord-text text-h4 leading-normal font-medium tracking-tight text-black mb-4 mt-2">
                                    Ad blocked by Threat Protection</h4>
                                <p class="nord-text text-base leading-normal text-grey-darkest mb-5">We care about your privacy and blocked this ad to prevent it from tracking you.</p>
                                <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                                    <div><button id="btn-go-back" type="button"
                                            class="nord-button focus:outline-none font-medium leading-normal align-bottom rounded select-none transition-colors ease-out duration-250 cursor-pointer border text-white nord-button--v-contained nord-button--c-blue bg-blue border-blue"
                                            href="#">Go Back</button></div>
                                    <div class="OrDivider text-grey-darkest text-small flex lg:my-0 mx-3 my-4">
                                        <hr /><span>Or</span>
                                        <hr />
                                    </div>
                                    <div><a rel="noreferrer" id="btn-unblock-permanent" class="nord-link cursor-pointer outline-none transition-colors duration-250 ease-out text-blue hover:text-blue-darkest block mb-3 text-small font-medium"
                                            href="#">Unblock</a>
                                            <p  class="nord-text text-grey-darkest block text-small font-small">You can block this page again from the app.</a>
                                    </div>
                                </div>
                            </div>
                            <div class="nord-col lg:col-6 flex justify-center">
                                <div class="hidden sm:block"><svg width="400" height="400"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1100"
                                        style="max-width:100%;height:initial">
                                        <defs>
                                            <style>
                                                .cls-1 {
                                                    isolation: &#x27;
                                                    isolate&#x27;
                                                }

                                                .cls-10,
                                                .cls-2,
                                                .cls-3 {
                                                    fill: #fff;
                                                }

                                                .cls-2 {
                                                    opacity: 0.2;
                                                }

                                                .cls-3 {
                                                    opacity: 0.4;
                                                }

                                                .cls-4 {
                                                    fill: #dee9ff;
                                                }

                                                .cls-5 {
                                                    fill: #d6e3ff;
                                                }

                                                .cls-6 {
                                                    fill: #e95f80;
                                                }

                                                .cls-7 {
                                                    fill: #ff7e24;
                                                }

                                                .cls-8 {
                                                    fill: #4580ff;
                                                }

                                                .cls-9 {
                                                    fill: #edf3ff;
                                                }

                                                .cls-11 {
                                                    opacity: 0.7;
                                                    mix-blend-mode: multiply;
                                                }

                                                .cls-12 {
                                                    fill: #d2e1f7;
                                                }

                                                .cls-13 {
                                                    fill: url(#linear-gradient);
                                                }

                                                .cls-14 {
                                                    fill: url(#linear-gradient-2);
                                                }
                                            </style>
                                            <linearGradient id="linear-gradient" x1="550" y1="889" x2="550" y2="189.26"
                                                gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stop-color="#77a7ff"></stop>
                                                <stop offset="0.28" stop-color="#7aa9ff"></stop>
                                                <stop offset="0.5" stop-color="#84afff"></stop>
                                                <stop offset="0.7" stop-color="#95baff"></stop>
                                                <stop offset="0.89" stop-color="#acc9ff"></stop>
                                                <stop offset="1" stop-color="#bdd4ff"></stop>
                                            </linearGradient>
                                            <linearGradient id="linear-gradient-2" x1="550" y1="875.33" x2="550"
                                                y2="203.8" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stop-color="#77a7ff"></stop>
                                                <stop offset="0.22" stop-color="#7caaff"></stop>
                                                <stop offset="0.48" stop-color="#8bb4ff"></stop>
                                                <stop offset="0.76" stop-color="#a2c3ff"></stop>
                                                <stop offset="1" stop-color="#bdd4ff"></stop>
                                            </linearGradient>
                                        </defs>
                                        <title>block icon</title>
                                        <g class="cls-1">
                                            <g id="Layer_3" data-name="Layer 3">
                                                <circle class="cls-2" cx="550" cy="550" r="550"></circle>
                                                <circle class="cls-3" cx="550" cy="550" r="440"></circle>
                                            </g>
                                            <g id="Layer_1" data-name="Layer 1">
                                                <rect class="cls-4" x="110" y="247.5" width="880" height="605" rx="11">
                                                </rect>
                                                <path class="cls-5"
                                                    d="M990,306.17H110V258.5a11,11,0,0,1,11-11H979a11,11,0,0,1,11,11Z">
                                                </path>
                                                <circle class="cls-6" cx="149.54" cy="276.83" r="11.36"></circle>
                                                <circle class="cls-7" cx="188.19" cy="276.83" r="11.36"></circle>
                                                <circle class="cls-8" cx="226.83" cy="276.83" r="11.36"></circle>
                                                <rect class="cls-9" x="110" y="306.17" width="880" height="288.16">
                                                </rect>
                                                <rect class="cls-9" x="155.08" y="633.22" width="239.41"
                                                    height="181.04"></rect>
                                                <rect class="cls-9" x="430.3" y="633.22" width="239.41" height="181.04">
                                                </rect>
                                                <rect class="cls-9" x="705.52" y="633.22" width="239.41"
                                                    height="181.04"></rect>
                                                <rect class="cls-10" x="155.08" y="362.91" width="789.84" height="99.68"
                                                    rx="25.42"></rect>
                                                <rect class="cls-10" x="155.08" y="483.84" width="513.97" height="53.74"
                                                    rx="26.87"></rect>
                                                <g class="cls-11">
                                                    <path class="cls-12"
                                                        d="M792.54,365.94A343,343,0,1,0,307.46,851c.49.5,1,1,1.5,1.47H448.57a262.28,262.28,0,0,1-55.39-31.42L762.6,451.67A264.52,264.52,0,0,1,651.44,852.5H791c.5-.49,1-1,1.5-1.47a342.75,342.75,0,0,0,0-485.09ZM337.4,765.3A264.19,264.19,0,0,1,706.82,395.89Z">
                                                    </path>
                                                </g>
                                                <path class="cls-13"
                                                    d="M680.68,228.11A348.28,348.28,0,1,0,795.6,304.4,346.09,346.09,0,0,0,680.68,228.11ZM282.55,550A267.51,267.51,0,0,1,708.79,334.73L334.73,708.79A265.37,265.37,0,0,1,282.55,550Zm534.9,0A267.51,267.51,0,0,1,391.21,765.27L765.27,391.21A265.48,265.48,0,0,1,817.45,550Z">
                                                </path>
                                                <path class="cls-14"
                                                    d="M550,883.33a332.37,332.37,0,1,1,125.42-24.41A332.13,332.13,0,0,1,550,883.33ZM369.83,766.86l13,9.66A281.51,281.51,0,0,0,776.52,382.88l-9.66-13.05ZM550,268.55A281.52,281.52,0,0,0,323.48,717.13l9.66,13,397-397-13-9.66A278.68,278.68,0,0,0,550,268.55Z">
                                                </path>
                                            </g>
                                        </g>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="nord-container container py-4">
                        <div class="nord-row row mt-5">
                            <div class="nord-col sm:col-6 mb-5">
                                <div class="mb-4 flex justify-center lg:justify-start">
                                    <div class="mr-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 18.6 18.6 24 12 24C5.4 24 0 18.6 0 12ZM18.0572 10.5543V13.5543L6.0494 13.5665V10.5665L18.0572 10.5543Z"
                                                fill="#D2283E"></path>
                                        </svg></div>
                                    <p class="nord-text text-base leading-normal text-red-dark font-medium text-left">
                                        Blocked tracker URL</p>
                                </div>
                                <p
                                    class="nord-text text-base leading-normal text-red-dark font-medium text-left break-all">
                                    https://static.doubleclick.net/instream/ad_status.js
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <script type="text/javascript">
                let unblock = (event, addr, id, type, delay) => {
                    event.preventDefault();

                    let path = "/unblock?id=" + id + "&type=" + type;
                    console.log("Unblocking at:", path);

                    fetch(path, {referrerPolicy: "no-referrer"}).then(() => {
                        setTimeout(() => {
                            window.location = addr;
                        }, delay);
                    });
                };

                
 


                document.getElementById('btn-unblock-permanent').addEventListener('click', e => {
                    unblock(e, "https:\/\/static.doubleclick.net\/instream\/ad_status.js", "aLi1kjxgPPuyiHvlfljTFhOJyZTSz3j647nlY5CBjn4%3D", "permanent", 1500);
                    return false;
                });

                document.getElementById('btn-go-back').addEventListener('click', e => {
                    history.back();
                    return false;
                });
            </script>
        </div>
</body>

</html>