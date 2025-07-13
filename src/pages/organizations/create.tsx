import React, { useState } from "react";
import axios from "axios";
import { apiBase } from "@/config";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

function OrganizationCreator() {
    const [orgName, setOrgName] = useState("");
    const [country, setCountry] = useState("");
    const [logo, setLogo] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", orgName);
        formData.append("country", country);
        if (logo) {
            formData.append("logo", logo);
        }

        try {
            const response = await axios.post(`${apiBase}/organization/new`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log("Organization created:", response.data);
        } catch (error) {
            console.error("Error creating organization:", error);
        }
    };

    return (
        <div className="flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-32 min-h-screen">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Create Organization</h1>
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <label className="text-sm font-medium">Organization Name</label>
                    <input
                        type="text"
                        placeholder="Organization Name"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label className="text-sm font-medium">Country</label>
                    <Select value={country} onValueChange={setCountry}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="af">Afghanistan</SelectItem>
                            <SelectItem value="al">Albania</SelectItem>
                            <SelectItem value="dz">Algeria</SelectItem>
                            <SelectItem value="ad">Andorra</SelectItem>
                            <SelectItem value="ao">Angola</SelectItem>
                            <SelectItem value="ag">Antigua and Barbuda</SelectItem>
                            <SelectItem value="ar">Argentina</SelectItem>
                            <SelectItem value="am">Armenia</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="at">Austria</SelectItem>
                            <SelectItem value="az">Azerbaijan</SelectItem>
                            <SelectItem value="bs">Bahamas</SelectItem>
                            <SelectItem value="bh">Bahrain</SelectItem>
                            <SelectItem value="bd">Bangladesh</SelectItem>
                            <SelectItem value="bb">Barbados</SelectItem>
                            <SelectItem value="by">Belarus</SelectItem>
                            <SelectItem value="be">Belgium</SelectItem>
                            <SelectItem value="bz">Belize</SelectItem>
                            <SelectItem value="bj">Benin</SelectItem>
                            <SelectItem value="bt">Bhutan</SelectItem>
                            <SelectItem value="bo">Bolivia</SelectItem>
                            <SelectItem value="ba">Bosnia and Herzegovina</SelectItem>
                            <SelectItem value="bw">Botswana</SelectItem>
                            <SelectItem value="br">Brazil</SelectItem>
                            <SelectItem value="bn">Brunei</SelectItem>
                            <SelectItem value="bg">Bulgaria</SelectItem>
                            <SelectItem value="bf">Burkina Faso</SelectItem>
                            <SelectItem value="bi">Burundi</SelectItem>
                            <SelectItem value="cv">Cabo Verde</SelectItem>
                            <SelectItem value="kh">Cambodia</SelectItem>
                            <SelectItem value="cm">Cameroon</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="cf">Central African Republic</SelectItem>
                            <SelectItem value="td">Chad</SelectItem>
                            <SelectItem value="cl">Chile</SelectItem>
                            <SelectItem value="cn">China</SelectItem>
                            <SelectItem value="co">Colombia</SelectItem>
                            <SelectItem value="km">Comoros</SelectItem>
                            <SelectItem value="cg">Congo</SelectItem>
                            <SelectItem value="cr">Costa Rica</SelectItem>
                            <SelectItem value="hr">Croatia</SelectItem>
                            <SelectItem value="cu">Cuba</SelectItem>
                            <SelectItem value="cy">Cyprus</SelectItem>
                            <SelectItem value="cz">Czech Republic</SelectItem>
                            <SelectItem value="dk">Denmark</SelectItem>
                            <SelectItem value="dj">Djibouti</SelectItem>
                            <SelectItem value="dm">Dominica</SelectItem>
                            <SelectItem value="do">Dominican Republic</SelectItem>
                            <SelectItem value="ec">Ecuador</SelectItem>
                            <SelectItem value="eg">Egypt</SelectItem>
                            <SelectItem value="sv">El Salvador</SelectItem>
                            <SelectItem value="gq">Equatorial Guinea</SelectItem>
                            <SelectItem value="er">Eritrea</SelectItem>
                            <SelectItem value="ee">Estonia</SelectItem>
                            <SelectItem value="sz">Eswatini</SelectItem>
                            <SelectItem value="et">Ethiopia</SelectItem>
                            <SelectItem value="fj">Fiji</SelectItem>
                            <SelectItem value="fi">Finland</SelectItem>
                            <SelectItem value="fr">France</SelectItem>
                            <SelectItem value="ga">Gabon</SelectItem>
                            <SelectItem value="gm">Gambia</SelectItem>
                            <SelectItem value="ge">Georgia</SelectItem>
                            <SelectItem value="de">Germany</SelectItem>
                            <SelectItem value="gh">Ghana</SelectItem>
                            <SelectItem value="gr">Greece</SelectItem>
                            <SelectItem value="gd">Grenada</SelectItem>
                            <SelectItem value="gt">Guatemala</SelectItem>
                            <SelectItem value="gn">Guinea</SelectItem>
                            <SelectItem value="gw">Guinea-Bissau</SelectItem>
                            <SelectItem value="gy">Guyana</SelectItem>
                            <SelectItem value="ht">Haiti</SelectItem>
                            <SelectItem value="hn">Honduras</SelectItem>
                            <SelectItem value="hu">Hungary</SelectItem>
                            <SelectItem value="is">Iceland</SelectItem>
                            <SelectItem value="in">India</SelectItem>
                            <SelectItem value="id">Indonesia</SelectItem>
                            <SelectItem value="ir">Iran</SelectItem>
                            <SelectItem value="iq">Iraq</SelectItem>
                            <SelectItem value="ie">Ireland</SelectItem>
                            <SelectItem value="il">Israel</SelectItem>
                            <SelectItem value="it">Italy</SelectItem>
                            <SelectItem value="jm">Jamaica</SelectItem>
                            <SelectItem value="jp">Japan</SelectItem>
                            <SelectItem value="jo">Jordan</SelectItem>
                            <SelectItem value="kz">Kazakhstan</SelectItem>
                            <SelectItem value="ke">Kenya</SelectItem>
                            <SelectItem value="ki">Kiribati</SelectItem>
                            <SelectItem value="kp">North Korea</SelectItem>
                            <SelectItem value="kr">South Korea</SelectItem>
                            <SelectItem value="kw">Kuwait</SelectItem>
                            <SelectItem value="kg">Kyrgyzstan</SelectItem>
                            <SelectItem value="la">Laos</SelectItem>
                            <SelectItem value="lv">Latvia</SelectItem>
                            <SelectItem value="lb">Lebanon</SelectItem>
                            <SelectItem value="ls">Lesotho</SelectItem>
                            <SelectItem value="lr">Liberia</SelectItem>
                            <SelectItem value="ly">Libya</SelectItem>
                            <SelectItem value="li">Liechtenstein</SelectItem>
                            <SelectItem value="lt">Lithuania</SelectItem>
                            <SelectItem value="lu">Luxembourg</SelectItem>
                            <SelectItem value="mg">Madagascar</SelectItem>
                            <SelectItem value="mw">Malawi</SelectItem>
                            <SelectItem value="my">Malaysia</SelectItem>
                            <SelectItem value="mv">Maldives</SelectItem>
                            <SelectItem value="ml">Mali</SelectItem>
                            <SelectItem value="mt">Malta</SelectItem>
                            <SelectItem value="mh">Marshall Islands</SelectItem>
                            <SelectItem value="mr">Mauritania</SelectItem>
                            <SelectItem value="mu">Mauritius</SelectItem>
                            <SelectItem value="mx">Mexico</SelectItem>
                            <SelectItem value="fm">Micronesia</SelectItem>
                            <SelectItem value="md">Moldova</SelectItem>
                            <SelectItem value="mc">Monaco</SelectItem>
                            <SelectItem value="mn">Mongolia</SelectItem>
                            <SelectItem value="me">Montenegro</SelectItem>
                            <SelectItem value="ma">Morocco</SelectItem>
                            <SelectItem value="mz">Mozambique</SelectItem>
                            <SelectItem value="mm">Myanmar</SelectItem>
                            <SelectItem value="na">Namibia</SelectItem>
                            <SelectItem value="nr">Nauru</SelectItem>
                            <SelectItem value="np">Nepal</SelectItem>
                            <SelectItem value="nl">Netherlands</SelectItem>
                            <SelectItem value="nz">New Zealand</SelectItem>
                            <SelectItem value="ni">Nicaragua</SelectItem>
                            <SelectItem value="ne">Niger</SelectItem>
                            <SelectItem value="ng">Nigeria</SelectItem>
                            <SelectItem value="mk">North Macedonia</SelectItem>
                            <SelectItem value="no">Norway</SelectItem>
                            <SelectItem value="om">Oman</SelectItem>
                            <SelectItem value="pk">Pakistan</SelectItem>
                            <SelectItem value="pw">Palau</SelectItem>
                            <SelectItem value="pa">Panama</SelectItem>
                            <SelectItem value="pg">Papua New Guinea</SelectItem>
                            <SelectItem value="py">Paraguay</SelectItem>
                            <SelectItem value="pe">Peru</SelectItem>
                            <SelectItem value="ph">Philippines</SelectItem>
                            <SelectItem value="pl">Poland</SelectItem>
                            <SelectItem value="pt">Portugal</SelectItem>
                            <SelectItem value="qa">Qatar</SelectItem>
                            <SelectItem value="ro">Romania</SelectItem>
                            <SelectItem value="ru">Russia</SelectItem>
                            <SelectItem value="rw">Rwanda</SelectItem>
                            <SelectItem value="kn">Saint Kitts and Nevis</SelectItem>
                            <SelectItem value="lc">Saint Lucia</SelectItem>
                            <SelectItem value="vc">Saint Vincent and the Grenadines</SelectItem>
                            <SelectItem value="ws">Samoa</SelectItem>
                            <SelectItem value="sm">San Marino</SelectItem>
                            <SelectItem value="st">Sao Tome and Principe</SelectItem>
                            <SelectItem value="sa">Saudi Arabia</SelectItem>
                            <SelectItem value="sn">Senegal</SelectItem>
                            <SelectItem value="rs">Serbia</SelectItem>
                            <SelectItem value="sc">Seychelles</SelectItem>
                            <SelectItem value="sl">Sierra Leone</SelectItem>
                            <SelectItem value="sg">Singapore</SelectItem>
                            <SelectItem value="sk">Slovakia</SelectItem>
                            <SelectItem value="si">Slovenia</SelectItem>
                            <SelectItem value="sb">Solomon Islands</SelectItem>
                            <SelectItem value="so">Somalia</SelectItem>
                            <SelectItem value="za">South Africa</SelectItem>
                            <SelectItem value="ss">South Sudan</SelectItem>
                            <SelectItem value="es">Spain</SelectItem>
                            <SelectItem value="lk">Sri Lanka</SelectItem>
                            <SelectItem value="sd">Sudan</SelectItem>
                            <SelectItem value="sr">Suriname</SelectItem>
                            <SelectItem value="se">Sweden</SelectItem>
                            <SelectItem value="ch">Switzerland</SelectItem>
                            <SelectItem value="sy">Syria</SelectItem>
                            <SelectItem value="tw">Taiwan</SelectItem>
                            <SelectItem value="tj">Tajikistan</SelectItem>
                            <SelectItem value="tz">Tanzania</SelectItem>
                            <SelectItem value="th">Thailand</SelectItem>
                            <SelectItem value="tl">Timor-Leste</SelectItem>
                            <SelectItem value="tg">Togo</SelectItem>
                            <SelectItem value="to">Tonga</SelectItem>
                            <SelectItem value="tt">Trinidad and Tobago</SelectItem>
                            <SelectItem value="tn">Tunisia</SelectItem>
                            <SelectItem value="tr">Turkey</SelectItem>
                            <SelectItem value="tm">Turkmenistan</SelectItem>
                            <SelectItem value="tv">Tuvalu</SelectItem>
                            <SelectItem value="ug">Uganda</SelectItem>
                            <SelectItem value="ua">Ukraine</SelectItem>
                            <SelectItem value="ae">United Arab Emirates</SelectItem>
                            <SelectItem value="gb">United Kingdom</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uy">Uruguay</SelectItem>
                            <SelectItem value="uz">Uzbekistan</SelectItem>
                            <SelectItem value="vu">Vanuatu</SelectItem>
                            <SelectItem value="va">Vatican City</SelectItem>
                            <SelectItem value="ve">Venezuela</SelectItem>
                            <SelectItem value="vn">Vietnam</SelectItem>
                            <SelectItem value="ye">Yemen</SelectItem>
                            <SelectItem value="zm">Zambia</SelectItem>
                            <SelectItem value="zw">Zimbabwe</SelectItem>
                        </SelectContent>
                    </Select>

                    <label className="text-sm font-medium">Logo</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setLogo(e.target.files?.[0] || null)}
                        className="border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        className="bg-transparent border-2 border-blue-500 text-blue-500 text-lg sm:text-xl rounded-lg p-2 sm:p-3 hover:bg-blue-500 hover:text-white transition-colors mt-4"
                        type="submit"
                    >
                        Create Organization
                    </button>
                </form>
            </div>
        </div>
    );
}

export default OrganizationCreator;
