import EditForm from "./EditForm"

export default function Settings () {

    return (
        <div className="flex justify-center">
            <div className="bg-neutral-700 rounded-md w-1/2 border border-neutral-600 p-4">
                <h1 className="text-2xl mb-6">
                    Settings
                </h1>
                <EditForm />
            </div>
        </div>
    )
}
