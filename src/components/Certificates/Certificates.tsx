import { arrCertificates } from "../../utils/data"
import SimpleCard from "../SimpleCard/SimpleCard";
import PageTitle from "@/components/PageTitle/PageTitle";

const Certificates = () => {
    const certificates = arrCertificates;

    return (
        <div className='text-white'>
            <PageTitle title="Certificados" />
            <h1 className='text-xl font-semibold mb-2'>Certificados</h1>
            <p className='text-neutral-400 text-sm mb-4'>Aqui estão algumas das certificações que conquistei ao longo da minha jornada.</p>
            <div className="space-y-4 mb-8">
                {certificates.map((certificate, index) => {
                    return (
                        <SimpleCard
                            key={index}
                            href={certificate.href}
                            name={certificate.course}
                            desc={certificate.teacher}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Certificates