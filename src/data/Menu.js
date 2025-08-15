const HeaderMenu = [
    {
        name: "HOME",
        url: "/",
        hasChildren: false,
    },
    {
        name: "MEN",
        url: "/men",
        hasChildren: true,
        children: [
            {
                name: "Men Leather Jackets",
                url: "/men-leather-jackets"
            },
            {
                name: "Men Suits",
                url: "/men-suits"
            },
            {
                name: "Men’s Cotton Jacket",
                url: "/mens-cotton-jacket"
            },
            {
                name: "Men’s Vest",
                url: "/mens-vest"
            },
            {
                name: "Mens Coat",
                url: "/mens-coat"
            },
        ]
    },
    {
        name: "WOMEN",
        url: "/women",
        hasChildren: true,
        children: [
            {
                name: "Cropped Jacket for Women",
                url: "/cropped-jacket-for-women"
            },
            {
                name: "Women Black Leather Jacket",
                url: "/women-black-leather-jacket"
            },
            {
                name: "Women Blazer",
                url: "/women-blazer"
            },
            {
                name: "Women Coat",
                url: "/women-coat"
            }
        ]
    },
    {
        name: "AOUT US",
        url: "/about",
        hasChildren: false,
    },
    {
        name: "CONTACT US",
        url: "/about",
        hasChildren: false,
    }
]

const CateMenu = [
    {
        name: "Fashion",
        url: "/shop?category=fashion",
        icon: "/images/product/categories/cat-01.png",
        hasChildren: true,
        children: [
            {
                label: "Men",
                items: [
                    {
                        name: "T-shirts",
                        url: "/"
                    },
                    {
                        name: "Shirts",
                        url: "/"
                    },
                    {
                        name: "Jeans",
                        url: "/"
                    }
                ]
            },
            {
                label: "Women",
                items: [
                    {
                        name: "Jeans",
                        url: "/"
                    },
                    {
                        name: "T-shirts",
                        url: "/"
                    },
                    {
                        name: "Shirts",
                        url: "/"
                    },
                    {
                        name: "Tops",
                        url: "/"
                    },
                    {
                        name: "Jumpsuits",
                        url: "/"
                    },
                    {
                        name: "Coats",
                        url: "/"
                    },
                    {
                        name: "Sweater",
                        url: "/"
                    },
                ]
            },
            {
                label: "Accessories",
                items: [
                    {
                        name: "Handbag",
                        url: "/"
                    },
                    {
                        name: "Shoes",
                        url: "/"
                    },
                    {
                        name: "Wallets",
                        url: "/"
                    }
                ]
            },
        ],
        featured: [
            {
                thumb: "/images/product/product-feature1.png",
                url: "/"
            },
            {
                thumb: "/images/product/product-feature2.png",
                url: "/"
            },
            {
                thumb: "/images/product/product-feature3.png",
                url: "/"
            },
            {
                thumb: "/images/product/product-feature4.png",
                url: "/"
            },

        ]

    },
    {
        name: "Electronics",
        url: "/shop?category=electronics",
        icon: "/images/product/categories/cat-02.png",
        hasChildren: false
    },
    {
        name: "Home Decor",
        url: "/",
        icon: "/images/product/categories/cat-03.png",
        hasChildren: false
    },
    {
        name: "Medicine",
        url: "/",
        icon: "/images/product/categories/cat-04.png",
        hasChildren: false
    },
    {
        name: "Furniture",
        url: "/shop?category=furniture",
        icon: "/images/product/categories/cat-05.png",
        hasChildren: false
    },
    {
        name: "Crafts",
        url: "/",
        icon: "/images/product/categories/cat-06.png",
        hasChildren: false
    },
    {
        name: "Accessories",
        url: "/",
        icon: "/images/product/categories/cat-07.png",
        hasChildren: false
    },
    {
        name: "Camera",
        url: "/",
        icon: "/images/product/categories/cat-08.png",
        hasChildren: false
    }
]

const DashboardAsideMenu = [
    {
        icon: "fas fa-th-large",
        name: "Dashboard",
        slug: ""
    },
    {
        icon: "fas fa-shopping-basket",
        name: "Orders",
        slug: "orders"
    },
    {
        icon: "fas fa-file-download",
        name: "Downloads",
        slug: "downloads"
    },
    {
        icon: "fas fa-home",
        name: "Addresses",
        slug: "addresses-edit"
    },
    {
        icon: "fas fa-user",
        name: "Account Details",
        slug: "account-details"
    }
]

export { HeaderMenu, CateMenu, DashboardAsideMenu };