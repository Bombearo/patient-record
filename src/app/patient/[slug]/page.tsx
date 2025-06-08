interface PatientPageProps{
    params:{
        slug:string;
    }
}


function PatientPage({params: {slug}}:PatientPageProps) {
    return (<div>
        {slug}

    </div>  );
}

export default PatientPage;