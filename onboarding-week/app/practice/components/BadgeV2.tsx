type BadgeProps = { label: string; variant: 'blue' | 'green' | 'yellow' }

export default function BadgeV2({label, variant}: BadgeProps) {

    const variants = {
        blue : ' bg-blue-100 text-blue-800 ',
        green : ' bg-green-100 text-green-800 ',
        yellow : ' bg-yellow-100 text-yellow-800 '
    }

    return (
        <span className={`px-3 py-1 ${variants[variant]} rounded-full text-sm`}>{label}</span>
    )

    
}