export interface blog {
    image: string;
    name: string;
    subject: string;
    link?: string;
    content: string;
    iconHref: string;
    button1: BlogButton;
    button2: BlogButton;
    button3: BlogButton;
}

interface BlogButton {
    label: string;
    href: string;
    class: string;
}




