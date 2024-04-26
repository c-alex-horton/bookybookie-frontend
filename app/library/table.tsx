import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"

export default function BookTable({books}: {books: Book[]}) {
    return (
        <>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Genre</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Pub Date</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {books.map((book) => (
                    <TableRow key={book.id}>
                        <TableCell>{book.title}</TableCell>
                        <TableCell>{book.authors.map((author) => author.name).join(", ")}</TableCell>
                        <TableCell>{book.genres.map((genre) => genre.name).join(", ")}</TableCell>
                        <TableCell>{book.status}</TableCell>
                        <TableCell>{new Date(book.publicationDate).toLocaleDateString()}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
        </>
    )
}




type Book = {
    id: number
    title: string
    publicationDate: string
    description: string
    notes: string
    ISBN: string
    pages: number
    status: string
    userId: number | null
    tags: Tag[]
    authors: Author[]
    genres: Genre[]
}

type Tag = {
    id: number
    name: string
}

type Author = {
    id: number
    name: string
    country: string
}

type Genre = {
    id: number
    name: string
}