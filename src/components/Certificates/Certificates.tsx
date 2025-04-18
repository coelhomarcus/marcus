import { arrCertificates } from "../../utils/arrays"

const Certificates = () => {
    const certificates = arrCertificates;

    return (
        <div className='text-white'>
            <h1 className='text-xl font-semibold mb-2'>Certificados</h1>
            <p className='text-neutral-400 text-sm mb-4'>
                Aqui estão algumas das certificações que conquistei ao longo da minha jornada.
            </p>
            <div className="space-y-4 mb-8">
                {certificates.map((certificate, index) => {
                    return <a key={index} href={certificate.href}
                        className="block rounded-xl text-neutral-400 shadow-inner shadow-neutral-800 -mx-4 p-4 transition-colors hover:bg-neutral-900 hover:text-neutral-200 border border-neutral-800"
                        rel="noreferrer noopener"
                        target="_blank">
                        <p className="text-sm text-neutral-100 font-medium">{certificate.course}</p>
                        <p className="text-sm">{certificate.teacher}</p>
                    </a>
                })}
            </div>
        </div>
    )
}

export default Certificates