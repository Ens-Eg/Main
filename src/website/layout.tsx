// src/app/website/layout.tsx

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <h1>Website Header</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>Website Footer</p>
            </footer>
        </div>
    );
}