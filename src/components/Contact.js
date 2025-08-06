import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
export default function Contact() {
    return (
        <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-4xl font-bold text-blue-600 text-center">
                Contact
            </h2>
            <div className="flex gap-5 justify-center 
                        my-10">
                <a rel="noreferrer"
                   target="_blank"                   className="text-center hover:underline"
                   href=
"https://instagram.com/harini_11204_">
                    <InstagramIcon style={{color:'darkblue'}}/>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://github.com/Harini-b11204">
                    <GitHubIcon style={{color:'darkblue'}}/>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"mailto:@harinibaskaran3@gmail.com">
                    <EmailIcon style={{color:'darkblue'}}/>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://www.linkedin.com/in/harini-baskaran-b268bb257/">
                    <LinkedInIcon style={{color:'darkblue'}}/>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href="https://maps.app.goo.gl/JeCwukpvanVCNfB38">
                    <PlaceIcon style={{color:'darkblue'}}/>
                </a>
            </div>
        </section>
    );
}
