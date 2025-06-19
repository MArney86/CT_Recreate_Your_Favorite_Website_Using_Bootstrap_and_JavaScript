if (sessionStorage.getItem("products") === null) {
    sessionStorage.setItem("products", JSON.stringify([
    {id: 1,
    name: "3D Model Alpha",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "Blender, Maya, Obj File",
    artist: "vastkai",
    price: 19.99,
    image: "https://picsum.photos/400/250"},
    {id: 2,
    name: "3D Model Beta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "3DSMax, Blender, FBX, Obj File",
    artist: "fandangoarroo",
    price: 29.99,
    image: "https://picsum.photos/200/480"},
    {id: 3,
    name: "3D Model Gamma",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "Blender, Maya, Obj File",
    artist: "firedoaks",
    price: 9.99,
    image: "https://picsum.photos/400/250?random=2"},
    {id: 4,
    name: "3D Model Delta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "3DSMax, Blender, FBX, Obj File",
    artist: "opossumexactly",
    price: 19.99,
    image: "https://picsum.photos/400/400"},
    {id: 5,
    name: "3D Model Epsilon",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "Blender, Maya, Obj File",
    artist: "shadesoxacillin",
    price: 24.49,
    image: "https://picsum.photos/400/250?random=3"},
    {id: 6,
    name: "3D Model Zeta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "3DSMax, Blender, FBX, Obj File",
    artist: "fandangoarroo",
    price: 1.99,
    image: "https://picsum.photos/300/450"},
    {id: 7,
    name: "3D Model Eta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "Blender, Maya, Obj File",
    artist: "klemensadalbert",
    price: 4.99,
    image: "https://picsum.photos/298/500?"},
    {id: 8,
    name: "3D Model Theta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "3DSMax, Blender, FBX, Obj File",
    artist: "scuffleeggnog",
    price: 19.49,
    image: "https://picsum.photos/400/400?random=2"},
    {id: 9,
    name: "3D Model Iota",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "Blender, Maya, Obj File",
    artist: "shadesoxacillin",
    price: 9.99,
    image: "https://picsum.photos/150/450"},
    {id: 10,
    name: "3D Model Kappa",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "3DSMax, Blender, FBX, Obj File",
    artist: "damaborthladd",
    price: 17.79,
    image: "https://picsum.photos/500/250"},
    {id: 11,
    name: "3D Model Lambda",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "Blender, Maya, Obj File",
    artist: "vastkai",
    price: 19.09,
    image: "https://picsum.photos/448/220"},
    {id: 12,
    name: "3D Model Mu",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur: 
                <ul>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>sunt in culpa qui officia </li>
                    <li>deserunt mollit anim id est laborum<li>`,
    
    compSoftware: "3DSMax, Blender, FBX, Obj File",
    artist: "criodeidh",
    price: 19.91,
    image: "https://picsum.photos/140/350"},])); // Store the products in session storage
}

if (sessionStorage.getItem("gallery") === null) {
    sessionStorage.setItem("gallery", JSON.stringify([
    {id: 1,
    name: "Image Alpha",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Blender",
    artist: "vastkai",
    type: "image",
    media: "https://picsum.photos/400/250?random=1",},
    {id: 2,
    name: "Video Alpha",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna neque, consectetur in lacus nec, ullamcorper egestas risus. Aliquam orci est, varius in lacus tincidunt, blandit sodales arcu. Nam aliquet enim eu metus imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tempus nibh at nisl ultrices commodo. Mauris magna leo, ultrices nec tincidunt in, semper id nibh. Curabitur congue pellentesque vestibulum. Quisque tristique pretium sapien, in tempus tortor ullamcorper id. Ut nec mollis ligula. Fusce fringilla vestibulum magna a gravida. Nunc ultricies lobortis leo. Suspendisse a nibh eros. Nullam quis eleifend purus. Curabitur in sapien nunc. Nulla facilisi. Nullam blandit elit in felis elementum, ac volutpat lectus iaculis.</p>
                <p>Integer eleifend mi magna. Donec venenatis rutrum tortor et maximus. Praesent tincidunt bibendum faucibus. Donec eu dictum lectus. Sed varius tempor nulla. Aliquam hendrerit auctor porttitor. Curabitur nec nulla ut purus posuere sagittis congue sit amet libero. Aliquam sit amet metus ut metus iaculis scelerisque a eget enim. Phasellus eu maximus arcu.</p>`,
    usedSoftware: "Poser, Metasequoia",
    artist: "fandangoarroo",
    type: "video",
    media: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",},
    {id: 3,
    name: "Image Beta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Integer eleifend mi magna. Donec venenatis rutrum tortor et maximus. Praesent tincidunt bibendum faucibus. Donec eu dictum lectus. Sed varius tempor nulla. Aliquam hendrerit auctor porttitor. Curabitur nec nulla ut purus posuere sagittis congue sit amet libero. Aliquam sit amet metus ut metus iaculis scelerisque a eget enim. Phasellus eu maximus arcu.</p>`,
    usedSoftware: "Blender, Adobe After Effects",
    artist: "firedoaks",
    type: "image",
    media: "https://picsum.photos/400/250?random=2",},
    {id: 4,
    name: "Image Gamma",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi urna neque, consectetur in lacus nec, ullamcorper egestas risus. Aliquam orci est, varius in lacus tincidunt, blandit sodales arcu. Nam aliquet enim eu metus imperdiet pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tempus nibh at nisl ultrices commodo. Mauris magna leo, ultrices nec tincidunt in, semper id nibh. Curabitur congue pellentesque vestibulum. Quisque tristique pretium sapien, in tempus tortor ullamcorper id. Ut nec mollis ligula. Fusce fringilla vestibulum magna a gravida. Nunc ultricies lobortis leo. Suspendisse a nibh eros. Nullam quis eleifend purus. Curabitur in sapien nunc. Nulla facilisi. Nullam blandit elit in felis elementum, ac volutpat lectus iaculis.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Poser, Metasequoia",
    artist: "opossumexactly",
    type: "image",
    media: "https://picsum.photos/400/400?random=3",},
    {id: 5,
    name: "Video Beta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Adobe After Effects",
    artist: "shadesoxacillin",
    type: "video",
    media: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",},
    {id: 6,
    name: "Image Delta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Daz Studio, Blender",
    artist: "fandangoarroo",
    type: "image",
    media: "https://picsum.photos/300/450?random=4",},
    {id: 7,
    name: "Video Gamma",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Blender, Adobe After Effects",
    artist: "klemensadalbert",
    type: "video",
    media: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",},
    {id: 8,
    name: "Image Epsilon",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Adobe Photoshop, Blender",
    artist: "scuffleeggnog",
    type: "image",
    media: "https://picsum.photos/400/400?random=5",},
    {id: 9,
    name: "Image Zeta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Blender, Adobe Illustrator",
    artist: "shadesoxacillin",
    type: "image",
    media: "https://picsum.photos/298/500?random=6",},
    {id: 10,
    name: "Video Delta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Daz Studio, Adobe After Effects",
    artist: "damaborthladd",
    type: "video",
    media: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",},
    {id: 11,
    name: "Image Eta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Blender, Adobe Photoshop",
    artist: "vastkai",
    type: "image",
    media: "https://picsum.photos/448/220?random=7",},
    {id: 12,
    name: "Video Epsilon",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Blender, Adobe After Effects",
    artist: "criodeidh",
    type: "video",
    media: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",},
    {id: 13,
    name: "Image Theta",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Blender, Adobe Photoshop",
    artist: "vastkai",
    type: "image",
    media: "https://picsum.photos/140/350?random=8",},
    {id: 14,
    name: "Video Epsilon",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Blender, Adobe After Effects",
    artist: "criodeidh",
    type: "video",
    media: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",},
    {id: 15,
    name: "Image Iota",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Blender, Adobe Photoshop",
    artist: "vastkai",
    type: "image",
    media: "https://picsum.photos/500/250?random=9",},
    {id: 16,
    name: "Image Kappa",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Blender, Adobe Photoshop",
    artist: "damaborthladd",
    type: "image",
    media: "https://picsum.photos/500/250?random=10",},
    {id: 17,
    name: "Image Lambda",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Blender, Adobe Photoshop",
    artist: "vastkai",
    type: "image",
    media: "https://picsum.photos/448/220?random=11",},
    {id: 18,
    name: "Image Mu",
    description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur `,
    usedSoftware: "Blender, Adobe Photoshop",
    artist: "criodeidh",
    type: "image",
    media: "https://picsum.photos/140/350?random=12",}]));
}

if (sessionStorage.getItem("news") === null) {
    sessionStorage.setItem("news", JSON.stringify([
    {id: 1,
     title: "3DStore Launches New Market Section",
    article: `<p>We are excited to announce the launch of our new market section, where you can buy and sell 3D models, animations, and more. This new feature allows artists to showcase their work and connect with buyers from around the world.</p>
                <p>Whether you're a seasoned artist or just starting out, our market section provides a platform for you to share your creations and earn money. We believe that everyone should have the opportunity to turn their passion for 3D art into a business.</p>
                <p>Visit the market section today to explore the latest offerings and start selling your own work!</p>
                <p>Thank you for being a part of the 3DStore community!</p>
                <p>Best regards,</p>
                <p>3DStore Market Team</p>`,
    datetimeSubmitted: "2023-10-01T12:00:00Z",
    datetimePublished: "2023-10-01T17:00:00Z",
    author: "3DStore Market Team",
    image: "https://picsum.photos/400/250?random=5",
    category: "market"},
    {id: 2,
    title: "New Products Added to 3DStore",
    article: `<p>We are thrilled to announce that we have added new products to our 3DStore! Our team has been working hard to bring you the latest and greatest in 3D models, animations, and more.</p>
                <p>Check out our new arrivals section to see the latest additions. We have something for everyone, whether you're a hobbyist, a professional artist, or just someone who appreciates great 3D art.</p>
                <p>As always, we are committed to providing high-quality products and excellent customer service. If you have any questions or feedback, please don't hesitate to reach out to us.</p>
                <p>Thank you for being a part of the 3DStore community!</p>
                <p>Happy shopping!</p>`,
    datetimeSubmitted: "2023-10-05T12:00:00Z",
    datetimePublished: "2023-10-05T17:04:00Z",
    author: "3DStore Market Team",
    image: "https://picsum.photos/400/250?random=2",
    category: "market"},
    {id: 3,
    title: "3DStore Announces New Partnership",
    article: `<p>We are excited to announce a new partnership with a leading 3D software company. This partnership will allow us to offer our customers exclusive discounts on software and tools that can help them create stunning 3D art.</p>
                <p>Stay tuned for more details on how you can take advantage of this partnership and enhance your 3D art experience.</p>
                <p>We are always looking for ways to improve our offerings and provide value to our customers. If you have any suggestions or feedback, please let us know!</p>
                <p>Thank you for your continued support!</p>
                <p>Best regards,</p>
                <p>3DStore Team</p>`,
    datetimeSubmitted: "2023-10-10T12:00:00Z",
    datetimePublished: "2023-10-10T13:30:00Z",
    author: "3DStore Marketing Team",
    image: "https://picsum.photos/400/250?random=3",
    category: "community"},
    {id: 4,
    title: "3DStore Celebrates Milestone",
    article: `<p>3DStore is proud to celebrate a major milestone in our journey. We have reached over 10,000 registered users and we couldn't have done it without your support!</p>
                <p>To celebrate this achievement, we are offering a special discount on all products in our store. Use the code "MILESTONE10" at checkout to receive 10% off your next purchase.</p>
                <p>Thank you for being a part of the 3DStore community. We look forward to continuing to serve you and bringing you the best in 3D art.</p>
                <p>Cheers,</p>
                <p>3DStore Team</p>`,
    datetimeSubmitted: "2023-10-15T12:00:00Z",
    datetimePublished: "2023-10-15T18:00:00Z",
    author: "3DStore Admin Team",
    image: "https://picsum.photos/400/250?random=4",
    category: "community"},
    {id: 5,
    title: "3DStore Launches New Gallery",
    article: `<p>3DStore is excited to announce the launch of our new gallery feature, showcasing stunning 3D art from talented artists around the world. Explore the gallery to discover unique pieces and support the artists by purchasing their work.</p>
                <p>Our gallery features a wide range of 3D art, including models, animations, and more. Each piece is carefully curated to ensure quality and creativity. We believe that art should be accessible to everyone, and our gallery is a testament to that belief.</p>
                <p>Visit the gallery today and immerse yourself in the world of 3D art!</p>
                <p>Stay tuned for more updates and features coming soon to 3DStore.</p>
                <p>Thank you for your continued support!</p>`,
    datetimeSubmitted: "2023-10-20T12:00:00Z",
    datetimePublished: "2023-10-20T17:00:00Z",
    author: "3DStore Admin Team",
    image: "https://picsum.photos/400/250?random=1",
    category: "community"},
    {id: 6,
    title: "3DStore Merchant Highlight: Vastkai",
    article: `<p>We are thrilled to highlight one of our top merchants, Vastkai, who has been a part of the 3DStore community since the beginning. Vastkai is known for their stunning 3D models and animations that have captivated audiences worldwide.</p>
                <p>Vastkai's work is a testament to the creativity and talent that exists within our community. We encourage you to check out their store and support their work by purchasing their products.</p>
                <p>Thank you, Vastkai, for being an integral part of the 3DStore family!</p>
                <p>To a bright and accomplished future,</p>
                <p>3DStore Market Team`,
    datetimeSubmitted: "2023-10-25T12:00:00Z",
    datetimePublished: "2023-10-25T17:00:00Z",
    author: "3DStore Market Team",
    image: "https://picsum.photos/400/250?random=6",
    category: "market"},
    {id: 7,
    title: "3DStore Community Spotlight: Firedoaks",
    article: `<p>We are excited to shine a spotlight on one of our most active community members, Firedoaks. Firedoaks has been a part of the 3DStore community for several years and has contributed immensely to the growth and success of our platform.</p>
                <p>Firedoaks is known for their exceptional 3D models and animations that have inspired many artists in our community. We encourage you to check out their work and support them by purchasing their products.</p>
                <p>Thank you, Firedoaks, for your dedication and passion for 3D art!</p>
                <p>To a bright and accomplished future,</p>
                <p>3DStore Admin Team</p>`,
    datetimeSubmitted: "2023-10-30T12:00:00Z",
    datetimePublished: "2023-10-30T17:00:00Z",
    author: "3DStore Admin Team",
    image: "https://picsum.photos/400/250?random=5",
    category: "community"},
    {id: 8,
    title: "3DStore Announces New Features",
    article: `<p>We are excited to announce new features coming soon to 3DStore! Our team has been working hard to bring you the best experience possible, and we can't wait to share these updates with you.</p>
                <p>Some of the new features include:</p>
                <ul>
                    <li>Enhanced search functionality to help you find products faster</li>
                    <li>Improved product pages with more detailed information</li>
                    <li>A new user-friendly interface for easier navigation</li>
                    <li>And much more!</li>
                </ul>
            <p>We are committed to continuously improving our platform and providing you with the best tools to create and share your 3D art. Stay tuned for more updates and announcements!</p>
            <p>Thank you for being a part of the 3DStore community!</p>
            <p>Best regards,</p>
            <p>3DStore Team</p>`,
    datetimeSubmitted: "2023-11-01T12:00:00Z",
    datetimePublished: "2023-11-01T17:00:00Z",
    author: "3DStore Admin Team, 3DStore Development Team",
    image: "https://picsum.photos/400/250?random=7",
    category: "community"},
    {id: 9,
    title: "3DStore Merchant Highlight: klemensadalbert",
    article: `<p>We are thrilled to highlight one of our top merchants, klemensadalbert, who has been a part of the 3DStore community since the beginning. klemensadalbert is known for their stunning 3D models and animations that have captivated audiences worldwide.</p>
                <p>klemensadalbert's work is a testament to the creativity and talent that exists within our community. We encourage you to check out their store and support their work by purchasing their products.</p>
                <p>Thank you, klemensadalbert, for being an integral part of the 3DStore family!</p>
                <p>To a bright and accomplished future,</p>
                <p>3DStore Market Team</p>`,
    datetimeSubmitted: "2023-11-01T12:00:00Z",
    datetimePublished: "2023-11-01T17:00:00Z",
    author: "3DStore Market Team",
    image: "https://picsum.photos/400/250?random=8",
    category: "market"},
    {id: 10,
    title: "3DStore Community Spotlight: fandangoarroo",
    article: `<p>We are excited to shine a spotlight on one of our most active community members, fandangoarroo. fandangoarroo has been a part of the 3DStore community for several years and has contributed immensely to the growth and success of our platform.</p>
                <p>fandangoarroo is known for their exceptional 3D models and animations that have inspired many artists in our community. We encourage you to check out their work and support them by purchasing their products.</p>
                <p>Thank you, fandangoarroo, for your dedication and passion for 3D art!</p>
                <p>To a bright and accomplished future,</p>
                <p>3DStore Admin Team</p>`,
    datetimeSubmitted: "2023-11-05T12:00:00Z",
    datetimePublished: "2023-11-05T17:00:00Z",
    author: "3DStore Admin Team",
    image: "https://picsum.photos/400/250?random=8",
    category: "community"},
    {id: 11,
    title: "3DStore Merchant Highlight: opossumexactly",
    article: `<p>We are thrilled to highlight one of our top merchants, opossumexactly, who has been a part of the 3DStore community since the beginning. opossumexactly is known for their stunning 3D models and animations that have captivated audiences worldwide.</p>
                <p>opossumexactly's work is a testament to the creativity and talent that exists within our community. We encourage you to check out their store and support their work by purchasing their products.</p>
                <p>Thank you, opossumexactly, for being an integral part of the 3DStore family!</p>
                <p>To a bright and accomplished future,</p>
                <p>3DStore Market Team</p>`,
    datetimeSubmitted: "2023-11-08T12:00:00Z",
    datetimePublished: "2023-11-08T17:00:00Z",
    author: "3DStore Market Team",
    image: "https://picsum.photos/400/250?random=9",
    category: "market"},
    {id: 12,
    title: "3DStore Community Spotlight: scuffleeggnog",
    article: `<p>We are excited to shine a spotlight on one of our most active community members, scuffleeggnog. scuffleeggnog has been a part of the 3DStore community for several years and has contributed immensely to the growth and success of our platform.</p>
                <p>scuffleeggnog is known for their exceptional 3D models and animations that have inspired many artists in our community. We encourage you to check out their work and support them by purchasing their products.</p>
                <p>Thank you, scuffleeggnog, for your dedication and passion for 3D art!</p>
                <p>To a bright and accomplished future,</p>
                <p>3DStore Admin Team</p>`,
    datetimeSubmitted: "2023-11-12T12:00:00Z",
    datetimePublished: "2023-11-12T17:00:00Z",
    author: "3DStore Admin Team",
    image: "https://picsum.photos/400/250?random=10",
    category: "community"},
    {id: 13,
    title: "3DStore Merchant Highlight: criodeidh",
    article: `<p>We are thrilled to highlight one of our top merchants, criodeidh, who has been a part of the 3DStore community since the beginning. criodeidh is known for their stunning 3D models and animations that have captivated audiences worldwide.</p>
                <p>criodeidh's work is a testament to the creativity and talent that exists within our community. We encourage you to check out their store and support their work by purchasing their products.</p>
                <p>Thank you, criodeidh, for being an integral part of the 3DStore family!</p>
                <p>To a bright and accomplished future,</p>
                <p>3DStore Market Team</p>`,
    datetimeSubmitted: "2023-11-15T12:00:00Z",
    datetimePublished: "2023-11-15T17:00:00Z",
    author: "3DStore Market Team",
    image: "https://picsum.photos/400/250?random=11",
    category: "market"},
    {id: 14,
    title: "3DStore Community Spotlight: shadesoxacillin",
    article: `<p>We are excited to shine a spotlight on one of our most active community members, shadesoxacillin. shadesoxacillin has been a part of the 3DStore community for several years and has contributed immensely to the growth and success of our platform.</p>
                <p>shadesoxacillin is known for their exceptional 3D models and animations that have inspired many artists in our community. We encourage you to check out their work and support them by purchasing their products.</p>
                <p>Thank you, shadesoxacillin, for your dedication and passion for 3D art!</p>
                <p>To a bright and accomplished future,</p>
                <p>3DStore Admin Team</p>`,
    datetimeSubmitted: "2023-11-20T12:00:00Z",
    datetimePublished: "2023-11-20T17:00:00Z",
    author: "3DStore Admin Team",
    image: "https://picsum.photos/400/250?random=12",
    category: "community"}]));
}

function truncateWithElipsis(text, maxLength = 200) {
    if (text.length <= maxLength) {
        return text; // If the text is shorter than the max length, return it as is
    }
    const truncated = text.substring(0, maxLength-3);
    if (truncated.at(-1) === " " || truncated.at(-1) === ".") {
        return truncated.slice(0, -1) + "...";
    } else {
        return truncated.substring(0, truncated.lastIndexOf(" ")) + "..."; // Truncate the text to the last space before the max length and add ellipsis
    }
}

const products = JSON.parse(sessionStorage.getItem("products")); // Get the products from session storage
const gallery = JSON.parse(sessionStorage.getItem("gallery")); // Get the gallery from session storage
const images = gallery.filter(item => item.type === "image"); // Get the images from the gallery
const videos = gallery.filter(item => item.type === "video"); // Get the videos from the
const news = JSON.parse(sessionStorage.getItem("news")); // Get the news from session storage
const marketNews = news.filter(item => item.category === "market"); // Get the market news from the news
const communityNews = news.filter(item => item.category === "community"); // Get the community news from the news

let galleryDisplayArrays = JSON.parse(sessionStorage.getItem("galleryDisplayArrays")); // Get the market display arrays from session storage
if (galleryDisplayArrays === null) { // If the market display arrays are not set, create them
    imageIndices = [];
    videoIndices = [];
    if (images.length > 8) { // If there are more than 8 images in the gallery, get the indices of the images
        imageIndices = [0,1,2,3,4,5,6,7]; // Set the indices of the images to display in the first row
    } else { // If there are less than 8 images in the gallery, get the indices of the images
        for (let i = 0; i < images.length; i++) {
            imageIndices.push(i); // Push the index of the image to the image indices array
        }
    }
    if (videos.length > 8) { // If there are more than 8 images in the gallery, get the indices of the images
        videoIndices = [0,1,2,3,4,5,6,7]; // Set the indices of the images to display in the first row
    } else { // If there are less than 8 images in the gallery, get the indices of the images
        for (let i = 0; i < videos.length; i++) {
            videoIndices.push(i); // Push the index of the image to the image indices array
        }
    }

    sessionStorage.setItem("galleryDisplayArrays", JSON.stringify([imageIndices, videoIndices, getRandomizedIndices(gallery.length, 8)])); // set and store the market display arrays
    galleryDisplayArrays = JSON.parse(sessionStorage.getItem("galleryDisplayArrays")); // Get the newly set market display arrays from session storage again
}

let newsDisplayArrays = JSON.parse(sessionStorage.getItem("newsDisplayArrays")); // Get the news display arrays from session storage
if (newsDisplayArrays === null) { // If the news display arrays are not set, create them
    let marketNewsIndices = [];
    let communityNewsIndices = [];
    if (marketNews.length > 8) { // If there are more than 8 market news in the news, get the indices of the market news
        marketNewsIndices = [0,1,2,3,4,5,6,7]; // Set the indices of the market news to display in the first row
    } else { // If there are less than 8 market news in the news, get the indices of the market news
        for (let i = 0; i < marketNews.length; i++) {
            marketNewsIndices.push(i); // Push the index of the market news to the market news indices array
        }
    }
    if (communityNews.length > 8) { // If there are more than 8 community news in the news, get the indices of the community news
        communityNewsIndices = [0,1,2,3,4,5,6,7]; // Set the indices of the community news to display in the first row
    } else { // If there are less than 8 community news in the news, get the indices of the community news
        for (let i = 0; i < communityNews.length; i++) {
            communityNewsIndices.push(i); // Push the index of the community news to the community news indices array
        }
    }

    sessionStorage.setItem("newsDisplayArrays", JSON.stringify([marketNewsIndices, communityNewsIndices])); // set and store the news display arrays
    newsDisplayArrays = JSON.parse(sessionStorage.getItem("newsDisplayArrays")); // Get the newly set news display arrays from session storage again
}

let marketDisplayArrays = JSON.parse(sessionStorage.getItem("marketDisplayArrays")); // Get the market display arrays from session storage
if (marketDisplayArrays === null) { // If the market display arrays are not set, create them
    sessionStorage.setItem("marketDisplayArrays", JSON.stringify([getRandomizedIndices(products.length, 8), getRandomizedIndices(products.length, 8), getRandomizedIndices(products.length, 8)])); // set and store the market display arrays
    marketDisplayArrays = JSON.parse(sessionStorage.getItem("marketDisplayArrays")); // Get the newly set market display arrays from session storage again
}

document.addEventListener('DOMContentLoaded', () => { // Wait for the DOM to load
    let pageTitle = document.title;
    if (pageTitle === "3DStore Site News") {loadNews();} // Check if the page is the home page
    if (pageTitle === "3DStore Gallery") {loadGallery();}// Check if the page is the gallery page and load the gallery
    if (pageTitle === "3DStore Market") {loadProductsMarket();} // Check if the page is the market page and load the products if in the market page
    if (pageTitle === "Welcome to 3DStore") {setupNewsletterForm();} // Call the function to setup the newsletter form
    checkLoginNavbar(); // Check if the user is logged in and update the navbar based on response from checking cookies
});

function buildCarousel(carouselId,cardArr,indexArr) {
    function createCarouselItem(isActive = false, start = 0) {
        const item = document.createElement("div");
        item.className = "carousel-item" + (isActive ? " active" : "");
                
        const row = document.createElement("div");
        row.className = "row";
                
        for (let i = 0; i < 5; i++) {
            const idx = indexArr[(start+i) % 5]; // Calculate the position in the carousel row the card is in
            card = cardArr[idx].cloneNode(true); // Clone the product card to avoid modifying the original
            if (i === 0 || i === 1) {
                card.className = "col d-block";
            } else if (i === 2) {
                card.className = "col d-none d-md-block";
            } else if (i === 3) {
                card.className = "col d-none d-lg-block";
            } else if (i === 4) {
                card.className = "col d-none d-xl-block"
            }
            row.appendChild(card);
        }
        item.appendChild(row); // Append the row to the carousel item
        return item; // Return the carousel item
    }

    const carousel = document.createElement("div"); // Create a new div element for the carousel
    carousel.id = carouselId; // Set the ID for the carousel
    carousel.className = "carousel slide"; // Set the class for the carousel
    carousel.setAttribute("data-bs-ride", "carousel"); // Set the data attribute for the carousel to enable automatic sliding
    
    const carouselInner = document.createElement("div"); // Create a new div element for the carousel inner
    carouselInner.className = "carousel-inner"; // Set the class for the carousel inner
    carouselInner.id = `${carouselId}-inner`; // Set the ID for the carousel inner

    const length = cardArr.length; // Get the length of the card array

    for (let i=0; i<length;i++) {
        const isActive = (i === 0);
        const carouselItem = createCarouselItem(isActive, i); // Create the carousel item with the current index
        carouselInner.appendChild(carouselItem); // append the carousel item to the carousel inner
    }

    carousel.appendChild(carouselInner); // Append the carousel inner to the carousel
    // create the carousel controls
    const prevButton = document.createElement("button");
    prevButton.className = "carousel-control-prev";
    prevButton.type = "button";
    prevButton.setAttribute("data-bs-target", `#${carousel.id}`);
    prevButton.setAttribute("data-bs-slide", "prev");
    prevButton.innerHTML = `<span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>`;
    const nextButton = document.createElement("button");
    nextButton.className = "carousel-control-next";
    nextButton.type = "button";
    nextButton.setAttribute("data-bs-target", `#${carousel.id}`);
    nextButton.setAttribute("data-bs-slide", "next");
    nextButton.innerHTML = `<span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>`;

    carousel.appendChild(prevButton); // Append the previous button to the carousel
    carousel.appendChild(nextButton); // Append the next button to the carousel

    return carousel; // Return the carousel element
}

function buildCardArr(objectArr, type = "product") {
    let cardArr = [];
    if (type === "product") {
        cardArr = objectArr.map(object => {
            const card = document.createElement("div"); // Create a new div element for the card
            card.className = "col"; // Set the class for the card
            card.id = `product-${object.id}`; // Set the ID for the card
            card.innerHTML = `<div class="card bg-dark text-light mb-3 prod-card" id="product-${object.id} key=${object.id}"> 
                <img src="${object.image}" class="card-img-top" alt="${object.name}">
                <div class="card-body">
                    <h5 class="card-title">${object.name}</h5>
                    <p class="card-text">Artist: <span class="prodArt">${object.artist}</span></p>
                    <p class="card-text">Price: $<span>${object.price.toFixed(2)}</span></p>
                    <button class="btn btn-primary detail-btn" id="detail-btn-${object.id}">View Details</button>
                </div>
            </div>`;
            return card; // Return the card element
        })
    } else if (type === "gallery") {
        cardArr = objectArr.map(object => {
            const card = document.createElement("div"); // Create a new div element for the card
            card.className = "col"; // Set the class for the card
            card.id = `gallery-piece-${object.id}`; // Set the ID for the card
            const mediaTagged = object.type === "video" ? `video width=200 controls class="card-img-top gall-card">
                <source src=${object.media} type="video/mp4">
                This Browser does not support the HTML5 Video Tag
            </video` : `img src=${object.media} class="card-img-top gall-card" alt=${object.name}`; // Determine if the media is a video or an image
            card.innerHTML = `<div class="card bg-dark text-light mb-3" id="gallery-${object.id} key=${object.id}"> 
                <${mediaTagged}>
                <div class="card-body">
                    <h5 class="card-title">${object.name}</h5>
                    <p class="card-text">Artist: <span class="prodArt">${object.artist}</span></p>
                    <p class="card-text">Used Software: <span class="prodArt">${object.usedSoftware}</span></p>
                    <button class="btn btn-primary detail-btn" id="detail-btn-${object.id}">View Details</button>
                </div>
            </div>`;
            return card;
        });
    } else if (type === "news") {
        cardArr = objectArr.map(object => {
            const card = document.createElement("div"); // Create a new div element for the card
            card.className = "col"; // Set the class for the card
            card.id = `news-${object.id}`; // Set the ID for the card
            card.innerHTML = `<div class="card bg-dark text-light mb-3 news-card" id="news-${object.id} key=${object.id}"> 
                <img src="${object.image}" class="card-img-top" alt="${object.title}">
                <div class="card-body">
                    <h5 class="card-title">${object.title}</h5>
                    <p class="card-text">${truncateWithElipsis(object.article,100)}</p>
                    <p class="card-text"><small class="text-muted">Published on: ${new Date(object.datetimePublished).toLocaleDateString()}</small></p> 
                    <p class-"card-text">Author: ${object.author}</p>
                    <button class="btn btn-primary detail-btn" id="detail-btn-${object.id}">Read More...</button>
                </div>
            </div>`;
            return card; // Return the card element
        });
    } else {
        console.error ("Invalid card type specified. Please use appropriate type for card creation.")
        return null; // Return null if the type is invalid
    }
    return cardArr; // Return the array of card elements
}

function attachGalleryDetailListeners(container) {
    container.querySelectorAll('.detail-btn').forEach(btn => {
        const id = parseInt(btn.id.replace('detail-btn-', ''));
        btn.addEventListener('click', () => galleryModal(id));
    });
}

function attachMarketDetailListeners(container) {
    container.querySelectorAll('.detail-btn').forEach(btn => {
        const id = parseInt(btn.id.replace('detail-btn-', ''));
        btn.addEventListener('click', () => productModal(id));
    });
}

function attachNewsDetailListeners(container) {
    container.querySelectorAll('.detail-btn').forEach(btn => {
        const id = parseInt(btn.id.replace('detail-btn-', '')); // Get the ID of the news item from the button ID
        btn.addEventListener('click', () => newsModal(id)); // Attach the click event listener to the button
    });
}

function loadNews() {
    //create the carousels for the News features
        //get the sections for the Carousels
        const marketNewsSection = document.getElementById("news-market");
        const communityNewsSection = document.getElementById("news-community");
        const allNewsSection = document.getElementById("news-all");

        //Generate the carousel based off the randomized index arrays
        const newsCarousels = newsDisplayArrays.map((arr, idx) => {
            let carouselId = "";
            let cardArr = [];
            if (idx === 0) {
                carouselId = "news-market-carousel";
                cardArr = buildCardArr(marketNews, "news");
            } else if (idx === 1) {
                carouselId = "news-community-carousel";
                cardArr = buildCardArr(communityNews, "news");
            }
            const carouselSelected = buildCarousel(carouselId, cardArr, arr); // Build the carousel with the products and the randomized indices
            return carouselSelected; // Return the carousel element
        });
        marketNewsSection.appendChild(newsCarousels[0]);
        communityNewsSection.appendChild(newsCarousels[1]);

        
        allNewsSection.className = "row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-2"; // set the class for the all news section to display the news in a grid

        const newsCards = buildCardArr(news, "news"); // Build the news cards from the news array
        if (allNewsSection) {
            newsCards.forEach(newsCard => {; // add the news to the all news section
                allNewsSection.appendChild(newsCard.cloneNode(true)); // add the news card to the all news section
            })
        }

        attachNewsDetailListeners(allNewsSection); // Attach the detail listeners to the all news container
        attachNewsDetailListeners(marketNewsSection); // Attach the detail listeners to the market news container
        attachNewsDetailListeners(communityNewsSection); // Attach the detail listeners to the community news container

}

function loadGallery() {
    //create the carousels for the Gallery features
        //get the sections for the Carousels
        const galleryImages = document.getElementById("gallery-images");
        const galleryVideos = document.getElementById("gallery-videos");
        const galleryPopular = document.getElementById("gallery-popular");

        //Generate the carousel based off the randomized index arrays
        const galleryCarousels = galleryDisplayArrays.map((arr, idx) => {
            let carouselId = "";
            let cardArr = [];
            if (idx === 0) {
                carouselId = "gallery-images-carousel";
                cardArr = buildCardArr(images, "gallery");
            } else if (idx === 1) {
                carouselId = "gallery-videos-carousel";
                cardArr = buildCardArr(videos, "gallery");
            } else if (idx === 2) {
                carouselId = "gallery-popular-carousel";
                cardArr = buildCardArr(gallery, "gallery");
            }
            const carouselSelected = buildCarousel(carouselId, cardArr, arr); // Build the carousel with the products and the randomized indices
            return carouselSelected; // Return the carousel element
        });
        galleryImages.appendChild(galleryCarousels[0]);
        galleryVideos.appendChild(galleryCarousels[1]);
        galleryPopular.appendChild(galleryCarousels[2]);

        const galleryAllContainer = document.getElementById("gallery-all"); // get the all products section from the document
        galleryAllContainer.className = "row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-2"; // set the class for the all products section to display the products in a grid

        const galleryAllCards = buildCardArr(gallery, "gallery"); // Build the product cards for the all products section
        if (galleryAllContainer) {
            galleryAllCards.forEach(galleryCard => {; // add the products to the all products section
                galleryAllContainer.appendChild(galleryCard.cloneNode(true)); // add the product card to the all products section
            })
        }

        attachGalleryDetailListeners(galleryAllContainer); // Attach the detail listeners to the gallery all container
        attachGalleryDetailListeners(galleryImages); // Attach the detail listeners to the gallery images container
        attachGalleryDetailListeners(galleryVideos); // Attach the detail listeners to the gallery videos container
        attachGalleryDetailListeners(galleryPopular); // Attach the detail listeners to the gallery popular container
}

function loadProductsMarket() {
    //create the carousels for the market features
        //get the sections for the Carousels
        const newProducts = document.getElementById("new-products");
        const saleProducts = document.getElementById("sale-products");
        const bestProducts = document.getElementById("best-products");

        //Generate the carousel based off the randomized index arrays
        const marketCarousels = marketDisplayArrays.map((arr, idx) => {
            let carouselId = "";
            if (idx === 0) {
                carouselId = "new-products-carousel";
            } else if (idx === 1) {
                carouselId = "sale-products-carousel";
            } else if (idx === 2) {
                carouselId = "best-products-carousel";
            }
            const carouselSelected = buildCarousel(carouselId, buildCardArr(products, "product"), arr); // Build the carousel with the products and the randomized indices
            return carouselSelected; // Return the carousel element
        });
        newProducts.appendChild(marketCarousels[0]);
        saleProducts.appendChild(marketCarousels[1]);
        bestProducts.appendChild(marketCarousels[2]);

        const allProductsContainer = document.getElementById("all-products"); // get the all products section from the document
        allProductsContainer.className = "row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-2"; // set the class for the all products section to display the products in a grid
        const productCards = buildCardArr(products, "product"); // Build the product cards from the products array
        if (allProductsContainer) {
            productCards.forEach(productCard => {; // add the products to the all products section
                allProductsContainer.appendChild(productCard.cloneNode(true)); // add the product card to the all products section
            })
        }

        attachMarketDetailListeners(allProductsContainer); // Attach the detail listeners to the all products container
        attachMarketDetailListeners(newProducts); // Attach the detail listeners to the new products container
        attachMarketDetailListeners(saleProducts); // Attach the detail listeners to the sale products container
        attachMarketDetailListeners(bestProducts); // Attach the detail listeners to the best products container
}

function getRandomizedIndices(products_length, count) {
    if (count > products_length) count = products_length;
    
    const randomizedProducts = []; // Create an empty array to store the randomized products
    const usedIndices = new Set(); // Create a set to store the used indices

    for (let i=0; i<count; i++) { //loop through the number of requested product indices
        const randomIndex = parseInt(Math.random() * products_length); // Generate a random index
        if (!usedIndices.has(randomIndex)) {
            randomizedProducts.push(randomIndex); // Add the index to the array
            usedIndices.add(randomIndex); // Add the index to the set of used indices
        }
    }
    return randomizedProducts; // Return the array of randomized products
}

function setupNewsletterForm() { //Add form submit event listener to the newsletter signup form
    const form = document.getElementById('newsletterForm'); // get signup form element from document by ID

    if(form) { 
        form.addEventListener('submit', function(e) { // add eventlistener for form submission
            e.preventDefault(); // prevent default submission behavior
            alert('successfully signed up!'); //display alert 
            form.reset(); // reset the form
        });
    }
}


function simLogin(event) {
    if (event) event.preventDefault();

    //Get the username from the form Input
    const usernameInput = document.getElementById("acc-user-name");
    if (usernameInput && usernameInput.value.trim() !== "") {
        document.cookie = "username=" + encodeURIComponent(usernameInput.value.trim()) + "; path=/; max-age=86400";
    }

    document.cookie = "loggedIn=true; path=/; max-age=86400"; // Set a cookie to simulate login
    checkLoginNavbar(); // Update the navbar to reflect the login status
    closeDropdowns();
}

function simLogout(event) {
    document.cookie = "loggedIn=false; path=/; max-age=86400"; // Set a cookie to simulate logout
    checkLoginNavbar(); // Update the navbar to reflect the login status
    closeDropdowns();
}

function simSignup(event) {
    // Prevent any default actions from the event
    if (event) event.preventDefault();
    // Redirect to signup.html with the values
    window.location.href = "signup.html";
}

function closeDropdowns() {
    // Bootstrap 5: remove .show from dropdowns and togglers
    document.querySelectorAll('.user-account .dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
    });
    document.querySelectorAll('.user-account .dropdown-toggler.show').forEach(toggler => {
        toggler.classList.remove('show');
        toggler.setAttribute('aria-expanded', 'false');
    });
}



function getCookie(cookieKey) { // gets the cookie value by key or returns empty string if not found
 const searchKey = cookieKey + "=" // The key to search for in the cookies and return the value later more easily
 const cookies = decodeURIComponent(document.cookie); // Get all cookies and decode them incase of special characters
 const cookieList = cookies.split(";") // Split the cookies into an array
 for (let i=0;i<cookieList.length;i++) { // Loop through the cookies
     let c = cookieList[i].trimStart();
     if (c.indexOf(searchKey) == 0) { // Check if the cookie starts with the search key
         return c.substring(searchKey.length, c.length); // Return the value of the cookie by removing the key if found
     };
     
 };
 
 return "" // Return empty string if not found
}

function checkLoginNavbar() { // checks login status and updates the navbar accordingly
    const isLoggedIn = getCookie("loggedIn"); // Get the value of the "loggedIn" cookie
    
    // define the HTML for the account dropdowns if not logged in
    let noLogged = `<form>
        <label for="acc-user-name">Username:</label><br/>
        <input type="text" id="acc-user-name" name="acc-user-name"/><br/><br/>
        <label for="acc-password">Password:</label><br/>
        <input type="text" id="acc-password" name="acc-password"/><br/><br/>
        <div class="btn-container d-flex">
            <button type="button" id="login-btn">Login</button>
            <button type="button" id="signup-btn">Signup</button>
        </div>
    </form>`;

    // define the HTML for the account dropdowns if logged in
    let yesLogged = `<ul>
        <li>
            <a href="profile.html" class="dropdown-item d-flex align-items-center gap-2"><span class="material-icons-outlined">manage_accounts</span>Profile</a>
        </li>
        <li>
            <a href="cart.html#wishlist" class="dropdown-item d-flex align-items-center gap-2"><span class="material-icons-outlined">stars</span>Wishlist</a>
        </li>
        <li>
            <a href="profile.html#order-history" class="dropdown-item d-flex align-items-center gap-2"><span class="material-icons-outlined">receipt_long</span>Orders</a>
        </li>
        <li>
            <a href="gallery.html#personal" class="dropdown-item d-flex align-items-center gap-2"><span class="material-icons-outlined">art_track</span>My Gallery</a>
        </li>
        <button type="button" class="dropdown-item d-flex align-items-center gap-2" id="logout-btn"><span class="material-icons-outlined">logout</span>Logout</button>
    </ul>`;

    document.getElementById("lg-acc-drop").innerHTML = (isLoggedIn == "true") ? yesLogged : noLogged;
    document.getElementById("sm-acc-drop").innerHTML = (isLoggedIn == "true") ? yesLogged : noLogged;

    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const logoutBtn = document.getElementById("logout-btn");
    if (loginBtn) loginBtn.addEventListener("click", simLogin);
    if (signupBtn) signupBtn.addEventListener("click", simSignup);
    if (logoutBtn) logoutBtn.addEventListener("click", simLogout);
}

function newsModal(newsID) {
    const docModal = document.getElementById("news-modal");
    const article = news.find(n => n.id === newsID); // Find the news item by ID
    innerModal = document.createElement("div");
    innerModal.className = "modal-dialog modal-xl news-modal";
    innerModal.id = `news-${article.id}-modal`;
    innerModal.innerHTML = `<div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">${article.title}</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6">
                        <img src="${article.image}" alt="${article.title}" class="img-fluid">
                    </div>
                    <div class="col-md-6">
                        <h5>${article.title}</h5>
                        <p>${article.article}</p>
                        <p>Author: <span class="prodArt">${article.author}</span></p>
                        <p>Published on: ${new Date(article.datetimePublished).toLocaleDateString()}</p>
                        <p>Submitted on: ${new Date(article.datetimeSubmitted).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <p> all rights reserved to <span class="prodArt">${article.author}</span> and <span class="text-warning">3DStore</span></p>
            </div>
        </div>`;
    docModal.innerHTML = "";
    docModal.appendChild(innerModal); // Add the inner modal to the document modal
    const modal = new bootstrap.Modal(docModal); //activate the modal
    modal.show(); // Show the modal 
    const closeButton = document.getElementById('close-modal'); // Get the close button from the modal
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            docModal.innerHTML = ""; // Clear the modal content when the close button is clicked
        });
    }
}


function galleryModal(galleryID) {
    console.log("galleryModal called with", galleryID);
    const docModal = document.getElementById("gallery-modal")
    const exhibit = gallery.find(p => p.id === galleryID)
    innerModal = document.createElement("div");
    innerModal.className = "modal-dialog modal-xl gall-modal";
    innerModal.id = `gallery-exhibit-${exhibit.id}-modal`;
    modalMedia = exhibit.type === "video" ? `video controls class="card-img-top w-100 h-auto">
                <source src=${exhibit.media} type="video/mp4">
                This Browser does not support the HTML5 Video Tag
            </video` : `img src=${exhibit.media} class="card-img-top w-100" alt=${exhibit.name}`
    innerModal.innerHTML = `<div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">${exhibit.name}</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6">
                        <${modalMedia}>
                    </div>
                    <div class="col-md-6">
                        <h5>${exhibit.name}</h5>
                        <p>${exhibit.description}</p>
                        <p>Artist: <span class="gallArt">${exhibit.artist}</span></p>
                        <p>Compatible Software: ${exhibit.usedSoftware}</p>
                        <p>Mediatype: ${exhibit.type}</p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <p> all rights reserved to <span class="prodArt">${exhibit.artist}</span> and <span class="text-warning">3DStore</span></p>
            </div>
        </div>`;
    docModal.innerHTML = "";
    docModal.appendChild(innerModal); // Add the inner modal to the document modal
    const modal = new bootstrap.Modal(docModal); //activate the modal
    modal.show(); // Show the modal

    const closeButton = document.getElementById('close-modal'); // Get the close button from the modal
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            docModal.innerHTML = ""; // Clear the modal content when the close button is clicked
        });
    }
}

function productModal(productID) {
    const docModal = document.getElementById("productModal")
    const products= JSON.parse(sessionStorage.getItem("products"));
    const product = products.find(p => p.id === productID)
    innerModal = document.createElement("div");
    innerModal.className = "modal-dialog modal-xl";
    innerModal.id = `product-${product.id}-modal`;
    innerModal.innerHTML = `<div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">${product.name}</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-6">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    </div>
                    <div class="col-md-6">
                        <h5>${product.name}</h5>
                        <p>${product.description}</p>
                        <p>Artist: <span class="prodArt">${product.artist}</span></p>
                        <p>Compatible Software: ${product.compSoftware}</p>
                        <p>Price: $<span>${product.price.toFixed(2)}<span></p>
                        <button type="button" class="btn btn-primary" id="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <p> all rights reserved to <span class="prodArt">${product.artist}</span> and <span class="text-warning">3DStore</span></p>
            </div>
        </div>`;
    docModal.innerHTML = "";
    docModal.appendChild(innerModal); // Add the inner modal to the document modal
    const modal = new bootstrap.Modal(docModal); //activate the modal
    modal.show(); // Show the modal

    const addToCartButton = document.getElementById("add-to-cart");
    if (addToCartButton) {
        addToCartButton.addEventListener("click", () => {
            addToCart(productID); // Add the product to the cart when the button is clicked
        });
    }

    const closeButton = document.getElementById('close-modal'); // Get the close button from the modal
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            docModal.innerHTML = ""; // Clear the modal content when the close button is clicked
        });
    }
}

function addToCart(productID) {
    if (sessionStorage.getItem("customerCart") === null) {
        sessionStorage.setItem("customerCart", JSON.stringify([])); // Initialize the cart if it doesn't exist
    }
    const customerCart = JSON.parse(sessionStorage.getItem("customerCart"));
    
    if (customerCart.length > 0) {
        const existingProduct = customerCart.findIndex(item => item.id === productID); // Check if the product already exists in the cart
        if (existingProduct > -1) {
            customerCart[existingProduct].quantity += 1; // Increase quantity if product already exists in cart
        } else { //product does not exist in cart
            customerCart.push({id: productID, quantity: 1}); // Add new product to cart
        }
    } else { //cart is empty
        customerCart.push({id: productID, quantity: 1}); // Add new product to cart
    }
    sessionStorage.setItem("customerCart", JSON.stringify(customerCart)); // Save the cart back to session storage
    alert("Product added to cart!"); // Alert the user that the product has been added to the cart   
}
