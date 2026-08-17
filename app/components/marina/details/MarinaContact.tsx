import {
  Mail,
  Phone,
  Globe,
  Radio,
} from "lucide-react";

import { Marina } from "@/types/marina";
import MarinaCard from "../../ui/marina/MarinaCard";
import SectionTitle from "../../ui/marina/SectionTitle";
import MarinaInfoRow from "../../ui/marina/MarinaInfoRow";




type MarinaContactProps = {
  marina: Marina;
};


const MarinaContact = ({
  marina,
}: MarinaContactProps) => {


  const {
    phone,
    email,
    website,
    vhfChannel,
  } = marina.contact;



  const formattedWebsite = website
    ?.replace(/^https?:\/\//, "")
    .replace(/\/$/, "");



  const hasContact =
    phone ||
    email ||
    website ||
    vhfChannel;



  if (!hasContact) {
    return null;
  }



  return (

    <MarinaCard
      dark
      className="p-6"
    >


      <SectionTitle light>
        İletişim
      </SectionTitle>



      <div className="space-y-4 mt-6">


        {
          vhfChannel && (

            <MarinaInfoRow
              icon={Radio}
              label="VHF Kanalı"
              value={vhfChannel}
            />

          )
        }



        {
          phone && (

            <MarinaInfoRow
              icon={Phone}
              label="Telefon"
              value={phone}
            />

          )
        }



        {
          email && (

            <MarinaInfoRow
              icon={Mail}
              label="E-posta"
              value={email}
            />

          )
        }



        {
          website && (

            <div
              className="
              flex
              items-center
              gap-4
              rounded-2xl
              bg-white/10
              p-4
              "
            >

              <div
                className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-white/10
                "
              >

                <Globe size={22}/>

              </div>



              <div className="min-w-0">


                <p className="text-xs text-white/50">
                  Web
                </p>


                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  block
                  truncate
                  text-sm
                  text-primary-300
                  hover:text-white
                  transition
                  "
                >
                  {formattedWebsite}
                </a>


              </div>


            </div>

          )
        }


      </div>


    </MarinaCard>

  );

};


export default MarinaContact;