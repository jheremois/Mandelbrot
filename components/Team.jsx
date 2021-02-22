import React from 'react'

const Team = ()=>{

    return(
        <>
        <div className="bg-indigo-50 py-16" id='team'>
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-12">
                <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                    <h2 className="text-3xl font-extrabold text-indigo-900 tracking-tight sm:text-4xl">Meet our team</h2>
                    <p className="text-xl text-gray-600">Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.</p>
                </div>
                    <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-8">
                        <li className="py-10 px-6 bg-indigo-900 text-center rounded-lg xl:px-10 xl:text-left">
                            <div className="space-y-6 xl:space-y-10">
                                <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src='/background.png' alt='Jheremy' />
                                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div className="font-medium text-lg leading-6 space-y-1">
                                        <h3 className="text-white">Jheremy Castro</h3>
                                        <p className="text-indigo-400">Ui/Ux Designer</p>
                                    </div>
                                    <ul className="flex justify-center space-x-5">
                                        <li>
                                        <a href="/" className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">Twitter</span>
                                            <svg  className="w-5 h-5" viewBox="0 0 439 429" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M409.132 109.573C389.524 75.977 362.927 49.379 329.334 29.773C295.736 10.166 259.057 0.365005 219.271 0.365005C179.49 0.365005 142.799 10.169 109.208 29.773C75.612 49.378 49.016 75.977 29.408 109.573C9.803 143.168 0 179.854 0 219.63C0 267.41 13.94 310.375 41.827 348.536C69.711 386.7 105.733 413.108 149.89 427.763C155.03 428.717 158.835 428.046 161.309 425.767C163.784 423.485 165.02 420.627 165.02 417.205C165.02 416.634 164.971 411.497 164.876 401.788C164.778 392.079 164.732 383.609 164.732 376.382L158.165 377.518C153.978 378.285 148.696 378.61 142.319 378.518C135.945 378.429 129.328 377.761 122.477 376.519C115.623 375.288 109.248 372.433 103.347 367.96C97.449 363.487 93.262 357.632 90.787 350.404L87.932 343.834C86.029 339.46 83.033 334.601 78.94 329.275C74.847 323.944 70.708 320.33 66.521 318.427L64.522 316.996C63.19 316.045 61.954 314.898 60.811 313.567C59.669 312.236 58.814 310.904 58.243 309.57C57.671 308.235 58.145 307.14 59.67 306.281C61.195 305.422 63.951 305.005 67.95 305.005L73.658 305.858C77.465 306.621 82.174 308.9 87.791 312.709C93.405 316.515 98.02 321.463 101.637 327.551C106.017 335.357 111.294 341.305 117.483 345.398C123.667 349.491 129.902 351.534 136.182 351.534C142.462 351.534 147.886 351.058 152.456 350.111C157.021 349.159 161.304 347.728 165.303 345.826C167.016 333.068 171.68 323.267 179.291 316.416C168.443 315.276 158.69 313.559 150.027 311.276C141.369 308.99 132.422 305.28 123.192 300.136C113.957 294.999 106.296 288.62 100.207 281.01C94.117 273.396 89.119 263.4 85.22 251.031C81.319 238.657 79.368 224.383 79.368 208.205C79.368 185.17 86.888 165.568 101.925 149.388C94.881 132.07 95.546 112.656 103.922 91.148C109.442 89.433 117.628 90.72 128.476 95.001C139.326 99.284 147.27 102.953 152.316 105.995C157.362 109.036 161.405 111.613 164.451 113.703C182.156 108.756 200.427 106.282 219.269 106.282C238.111 106.282 256.386 108.756 274.092 113.703L284.941 106.854C292.36 102.284 301.121 98.096 311.203 94.289C321.291 90.484 329.005 89.436 334.337 91.151C342.899 112.66 343.662 132.073 336.616 149.391C351.652 165.571 359.175 185.178 359.175 208.208C359.175 224.386 357.217 238.705 353.322 251.174C349.422 263.645 344.381 273.631 338.197 281.153C332.006 288.674 324.296 295.003 315.066 300.139C305.834 305.279 296.884 308.989 288.226 311.275C279.564 313.561 269.811 315.279 258.963 316.421C268.857 324.983 273.805 338.498 273.805 356.96V417.197C273.805 420.619 274.995 423.476 277.377 425.759C279.756 428.038 283.513 428.709 288.653 427.754C332.816 413.101 368.838 386.692 396.721 348.528C424.601 310.367 438.546 267.402 438.546 219.622C438.536 179.851 428.728 143.168 409.132 109.573Z" fill="white"/>
                                            </svg>

                                        </a>
                                        </li>
                                        <li>
                                        <a href="/" className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M475.074 0H36.9258C16.5312 0 0 16.5312 0 36.9258V475.074C0 495.469 16.5312 512 36.9258 512H475.074C495.469 512 512 495.469 512 475.074V36.9258C512 16.5312 495.469 0 475.074 0V0ZM181.609 387H119.262V199.426H181.609V387ZM150.438 173.812H150.031C129.109 173.812 115.578 159.41 115.578 141.41C115.578 123.004 129.523 109 150.852 109C172.18 109 185.305 123.004 185.711 141.41C185.711 159.41 172.18 173.812 150.438 173.812ZM406.422 387H344.082V286.652C344.082 261.434 335.055 244.234 312.496 244.234C295.273 244.234 285.016 255.836 280.508 267.035C278.859 271.043 278.457 276.645 278.457 282.25V387H216.113C216.113 387 216.93 217.023 216.113 199.426H278.457V225.984C286.742 213.203 301.566 195.023 334.645 195.023C375.664 195.023 406.422 221.832 406.422 279.445V387Z" fill="white"/>
                                            </svg>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="py-10 px-6 bg-indigo-900 text-center rounded-lg xl:px-10 xl:text-left">
                            <div className="space-y-6 xl:space-y-10">
                                <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src='/background.png' alt='sebas' />
                                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div className="font-medium text-lg leading-6 space-y-1">
                                        <h3 className="text-white">Sebastian</h3>
                                        <p className="text-indigo-400">Developer</p>
                                    </div>
                                    <ul className="flex justify-center space-x-5">
                                        <li>
                                        <a href="/" className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">Twitter</span>
                                            <svg  className="w-5 h-5" viewBox="0 0 439 429" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M409.132 109.573C389.524 75.977 362.927 49.379 329.334 29.773C295.736 10.166 259.057 0.365005 219.271 0.365005C179.49 0.365005 142.799 10.169 109.208 29.773C75.612 49.378 49.016 75.977 29.408 109.573C9.803 143.168 0 179.854 0 219.63C0 267.41 13.94 310.375 41.827 348.536C69.711 386.7 105.733 413.108 149.89 427.763C155.03 428.717 158.835 428.046 161.309 425.767C163.784 423.485 165.02 420.627 165.02 417.205C165.02 416.634 164.971 411.497 164.876 401.788C164.778 392.079 164.732 383.609 164.732 376.382L158.165 377.518C153.978 378.285 148.696 378.61 142.319 378.518C135.945 378.429 129.328 377.761 122.477 376.519C115.623 375.288 109.248 372.433 103.347 367.96C97.449 363.487 93.262 357.632 90.787 350.404L87.932 343.834C86.029 339.46 83.033 334.601 78.94 329.275C74.847 323.944 70.708 320.33 66.521 318.427L64.522 316.996C63.19 316.045 61.954 314.898 60.811 313.567C59.669 312.236 58.814 310.904 58.243 309.57C57.671 308.235 58.145 307.14 59.67 306.281C61.195 305.422 63.951 305.005 67.95 305.005L73.658 305.858C77.465 306.621 82.174 308.9 87.791 312.709C93.405 316.515 98.02 321.463 101.637 327.551C106.017 335.357 111.294 341.305 117.483 345.398C123.667 349.491 129.902 351.534 136.182 351.534C142.462 351.534 147.886 351.058 152.456 350.111C157.021 349.159 161.304 347.728 165.303 345.826C167.016 333.068 171.68 323.267 179.291 316.416C168.443 315.276 158.69 313.559 150.027 311.276C141.369 308.99 132.422 305.28 123.192 300.136C113.957 294.999 106.296 288.62 100.207 281.01C94.117 273.396 89.119 263.4 85.22 251.031C81.319 238.657 79.368 224.383 79.368 208.205C79.368 185.17 86.888 165.568 101.925 149.388C94.881 132.07 95.546 112.656 103.922 91.148C109.442 89.433 117.628 90.72 128.476 95.001C139.326 99.284 147.27 102.953 152.316 105.995C157.362 109.036 161.405 111.613 164.451 113.703C182.156 108.756 200.427 106.282 219.269 106.282C238.111 106.282 256.386 108.756 274.092 113.703L284.941 106.854C292.36 102.284 301.121 98.096 311.203 94.289C321.291 90.484 329.005 89.436 334.337 91.151C342.899 112.66 343.662 132.073 336.616 149.391C351.652 165.571 359.175 185.178 359.175 208.208C359.175 224.386 357.217 238.705 353.322 251.174C349.422 263.645 344.381 273.631 338.197 281.153C332.006 288.674 324.296 295.003 315.066 300.139C305.834 305.279 296.884 308.989 288.226 311.275C279.564 313.561 269.811 315.279 258.963 316.421C268.857 324.983 273.805 338.498 273.805 356.96V417.197C273.805 420.619 274.995 423.476 277.377 425.759C279.756 428.038 283.513 428.709 288.653 427.754C332.816 413.101 368.838 386.692 396.721 348.528C424.601 310.367 438.546 267.402 438.546 219.622C438.536 179.851 428.728 143.168 409.132 109.573Z" fill="white"/>
                                            </svg>

                                        </a>
                                        </li>
                                        <li>
                                        <a href="/" className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M475.074 0H36.9258C16.5312 0 0 16.5312 0 36.9258V475.074C0 495.469 16.5312 512 36.9258 512H475.074C495.469 512 512 495.469 512 475.074V36.9258C512 16.5312 495.469 0 475.074 0V0ZM181.609 387H119.262V199.426H181.609V387ZM150.438 173.812H150.031C129.109 173.812 115.578 159.41 115.578 141.41C115.578 123.004 129.523 109 150.852 109C172.18 109 185.305 123.004 185.711 141.41C185.711 159.41 172.18 173.812 150.438 173.812ZM406.422 387H344.082V286.652C344.082 261.434 335.055 244.234 312.496 244.234C295.273 244.234 285.016 255.836 280.508 267.035C278.859 271.043 278.457 276.645 278.457 282.25V387H216.113C216.113 387 216.93 217.023 216.113 199.426H278.457V225.984C286.742 213.203 301.566 195.023 334.645 195.023C375.664 195.023 406.422 221.832 406.422 279.445V387Z" fill="white"/>
                                            </svg>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="py-10 px-6 bg-indigo-900 text-center rounded-lg xl:px-10 xl:text-left">
                            <div className="space-y-6 xl:space-y-10">
                                <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src='/background.png' alt='sebas' />
                                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div className="font-medium text-lg leading-6 space-y-1">
                                        <h3 className="text-white">El Gabo</h3>
                                        <p className="text-indigo-400">Frontend Developer</p>
                                    </div>
                                    <ul className="flex justify-center space-x-5">
                                        <li>
                                        <a href="/" className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">Twitter</span>
                                            <svg  className="w-5 h-5" viewBox="0 0 439 429" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M409.132 109.573C389.524 75.977 362.927 49.379 329.334 29.773C295.736 10.166 259.057 0.365005 219.271 0.365005C179.49 0.365005 142.799 10.169 109.208 29.773C75.612 49.378 49.016 75.977 29.408 109.573C9.803 143.168 0 179.854 0 219.63C0 267.41 13.94 310.375 41.827 348.536C69.711 386.7 105.733 413.108 149.89 427.763C155.03 428.717 158.835 428.046 161.309 425.767C163.784 423.485 165.02 420.627 165.02 417.205C165.02 416.634 164.971 411.497 164.876 401.788C164.778 392.079 164.732 383.609 164.732 376.382L158.165 377.518C153.978 378.285 148.696 378.61 142.319 378.518C135.945 378.429 129.328 377.761 122.477 376.519C115.623 375.288 109.248 372.433 103.347 367.96C97.449 363.487 93.262 357.632 90.787 350.404L87.932 343.834C86.029 339.46 83.033 334.601 78.94 329.275C74.847 323.944 70.708 320.33 66.521 318.427L64.522 316.996C63.19 316.045 61.954 314.898 60.811 313.567C59.669 312.236 58.814 310.904 58.243 309.57C57.671 308.235 58.145 307.14 59.67 306.281C61.195 305.422 63.951 305.005 67.95 305.005L73.658 305.858C77.465 306.621 82.174 308.9 87.791 312.709C93.405 316.515 98.02 321.463 101.637 327.551C106.017 335.357 111.294 341.305 117.483 345.398C123.667 349.491 129.902 351.534 136.182 351.534C142.462 351.534 147.886 351.058 152.456 350.111C157.021 349.159 161.304 347.728 165.303 345.826C167.016 333.068 171.68 323.267 179.291 316.416C168.443 315.276 158.69 313.559 150.027 311.276C141.369 308.99 132.422 305.28 123.192 300.136C113.957 294.999 106.296 288.62 100.207 281.01C94.117 273.396 89.119 263.4 85.22 251.031C81.319 238.657 79.368 224.383 79.368 208.205C79.368 185.17 86.888 165.568 101.925 149.388C94.881 132.07 95.546 112.656 103.922 91.148C109.442 89.433 117.628 90.72 128.476 95.001C139.326 99.284 147.27 102.953 152.316 105.995C157.362 109.036 161.405 111.613 164.451 113.703C182.156 108.756 200.427 106.282 219.269 106.282C238.111 106.282 256.386 108.756 274.092 113.703L284.941 106.854C292.36 102.284 301.121 98.096 311.203 94.289C321.291 90.484 329.005 89.436 334.337 91.151C342.899 112.66 343.662 132.073 336.616 149.391C351.652 165.571 359.175 185.178 359.175 208.208C359.175 224.386 357.217 238.705 353.322 251.174C349.422 263.645 344.381 273.631 338.197 281.153C332.006 288.674 324.296 295.003 315.066 300.139C305.834 305.279 296.884 308.989 288.226 311.275C279.564 313.561 269.811 315.279 258.963 316.421C268.857 324.983 273.805 338.498 273.805 356.96V417.197C273.805 420.619 274.995 423.476 277.377 425.759C279.756 428.038 283.513 428.709 288.653 427.754C332.816 413.101 368.838 386.692 396.721 348.528C424.601 310.367 438.546 267.402 438.546 219.622C438.536 179.851 428.728 143.168 409.132 109.573Z" fill="white"/>
                                            </svg>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/" className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M475.074 0H36.9258C16.5312 0 0 16.5312 0 36.9258V475.074C0 495.469 16.5312 512 36.9258 512H475.074C495.469 512 512 495.469 512 475.074V36.9258C512 16.5312 495.469 0 475.074 0V0ZM181.609 387H119.262V199.426H181.609V387ZM150.438 173.812H150.031C129.109 173.812 115.578 159.41 115.578 141.41C115.578 123.004 129.523 109 150.852 109C172.18 109 185.305 123.004 185.711 141.41C185.711 159.41 172.18 173.812 150.438 173.812ZM406.422 387H344.082V286.652C344.082 261.434 335.055 244.234 312.496 244.234C295.273 244.234 285.016 255.836 280.508 267.035C278.859 271.043 278.457 276.645 278.457 282.25V387H216.113C216.113 387 216.93 217.023 216.113 199.426H278.457V225.984C286.742 213.203 301.566 195.023 334.645 195.023C375.664 195.023 406.422 221.832 406.422 279.445V387Z" fill="white"/>
                                            </svg>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="py-10 px-6 bg-indigo-900 text-center rounded-lg xl:px-10 xl:text-left">
                            <div className="space-y-6 xl:space-y-10">
                                <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src='/background.png' alt='sebas' />
                                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                    <div className="font-medium text-lg leading-6 space-y-1">
                                        <h3 className="text-white">Omar EMC</h3>
                                        <p className="text-indigo-400">Frontend Backend</p>
                                    </div>
                                    <ul className="flex justify-center space-x-5">
                                        <li>
                                        <a href="/" className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">Twitter</span>
                                            <svg  className="w-5 h-5" viewBox="0 0 439 429" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M409.132 109.573C389.524 75.977 362.927 49.379 329.334 29.773C295.736 10.166 259.057 0.365005 219.271 0.365005C179.49 0.365005 142.799 10.169 109.208 29.773C75.612 49.378 49.016 75.977 29.408 109.573C9.803 143.168 0 179.854 0 219.63C0 267.41 13.94 310.375 41.827 348.536C69.711 386.7 105.733 413.108 149.89 427.763C155.03 428.717 158.835 428.046 161.309 425.767C163.784 423.485 165.02 420.627 165.02 417.205C165.02 416.634 164.971 411.497 164.876 401.788C164.778 392.079 164.732 383.609 164.732 376.382L158.165 377.518C153.978 378.285 148.696 378.61 142.319 378.518C135.945 378.429 129.328 377.761 122.477 376.519C115.623 375.288 109.248 372.433 103.347 367.96C97.449 363.487 93.262 357.632 90.787 350.404L87.932 343.834C86.029 339.46 83.033 334.601 78.94 329.275C74.847 323.944 70.708 320.33 66.521 318.427L64.522 316.996C63.19 316.045 61.954 314.898 60.811 313.567C59.669 312.236 58.814 310.904 58.243 309.57C57.671 308.235 58.145 307.14 59.67 306.281C61.195 305.422 63.951 305.005 67.95 305.005L73.658 305.858C77.465 306.621 82.174 308.9 87.791 312.709C93.405 316.515 98.02 321.463 101.637 327.551C106.017 335.357 111.294 341.305 117.483 345.398C123.667 349.491 129.902 351.534 136.182 351.534C142.462 351.534 147.886 351.058 152.456 350.111C157.021 349.159 161.304 347.728 165.303 345.826C167.016 333.068 171.68 323.267 179.291 316.416C168.443 315.276 158.69 313.559 150.027 311.276C141.369 308.99 132.422 305.28 123.192 300.136C113.957 294.999 106.296 288.62 100.207 281.01C94.117 273.396 89.119 263.4 85.22 251.031C81.319 238.657 79.368 224.383 79.368 208.205C79.368 185.17 86.888 165.568 101.925 149.388C94.881 132.07 95.546 112.656 103.922 91.148C109.442 89.433 117.628 90.72 128.476 95.001C139.326 99.284 147.27 102.953 152.316 105.995C157.362 109.036 161.405 111.613 164.451 113.703C182.156 108.756 200.427 106.282 219.269 106.282C238.111 106.282 256.386 108.756 274.092 113.703L284.941 106.854C292.36 102.284 301.121 98.096 311.203 94.289C321.291 90.484 329.005 89.436 334.337 91.151C342.899 112.66 343.662 132.073 336.616 149.391C351.652 165.571 359.175 185.178 359.175 208.208C359.175 224.386 357.217 238.705 353.322 251.174C349.422 263.645 344.381 273.631 338.197 281.153C332.006 288.674 324.296 295.003 315.066 300.139C305.834 305.279 296.884 308.989 288.226 311.275C279.564 313.561 269.811 315.279 258.963 316.421C268.857 324.983 273.805 338.498 273.805 356.96V417.197C273.805 420.619 274.995 423.476 277.377 425.759C279.756 428.038 283.513 428.709 288.653 427.754C332.816 413.101 368.838 386.692 396.721 348.528C424.601 310.367 438.546 267.402 438.546 219.622C438.536 179.851 428.728 143.168 409.132 109.573Z" fill="white"/>
                                            </svg>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="/" className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M475.074 0H36.9258C16.5312 0 0 16.5312 0 36.9258V475.074C0 495.469 16.5312 512 36.9258 512H475.074C495.469 512 512 495.469 512 475.074V36.9258C512 16.5312 495.469 0 475.074 0V0ZM181.609 387H119.262V199.426H181.609V387ZM150.438 173.812H150.031C129.109 173.812 115.578 159.41 115.578 141.41C115.578 123.004 129.523 109 150.852 109C172.18 109 185.305 123.004 185.711 141.41C185.711 159.41 172.18 173.812 150.438 173.812ZM406.422 387H344.082V286.652C344.082 261.434 335.055 244.234 312.496 244.234C295.273 244.234 285.016 255.836 280.508 267.035C278.859 271.043 278.457 276.645 278.457 282.25V387H216.113C216.113 387 216.93 217.023 216.113 199.426H278.457V225.984C286.742 213.203 301.566 195.023 334.645 195.023C375.664 195.023 406.422 221.832 406.422 279.445V387Z" fill="white"/>
                                            </svg>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {/* More items... */}
                    </ul>
                </div>
            </div>
        </div>
        </>
    )

}

export default Team