import React, { useState } from 'react';
import axios from 'axios';
import { apiBase } from '@/config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { countries } from '@/utils/countries';
import { FixedSizeList as List } from "react-window";
import { useMemo } from "react";

function Register() {
    const memoizedCountries = useMemo(() => countries, []);
    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const country = memoizedCountries[index];
    return (
        <div style={style}>
        <SelectItem key={country.code} value={country.code}>
            {country.name}
        </SelectItem>
        </div>
    );
}

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    country: '',
    title: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    profilePicture: null,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step < 4) {
      setStep(step + 1);
      return;
    }

    const {
      password,
      confirmPassword,
      profilePicture,
      ...submitData
    } = formData;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.keys(submitData).forEach((key) => {
        formDataToSend.append(key, submitData[key as keyof typeof submitData]);
      });
      formDataToSend.append('password', password);
      if (profilePicture) {
        formDataToSend.append('profilePicture', profilePicture);
      }

      const response = await axios.post(`${apiBase}/auth/register`, 
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 201) {
        navigate('/auth/login');
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  const Step1 = () => (
    <div className="space-y-4">
        <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div> 
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        />
      </div>
    </div>
  );

  const Step2 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        />
      </div>
    </div>
  );

  const Step3 = () => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="country">Country</Label>
      <Select
        value={formData.country}
        onValueChange={(value) =>
          setFormData({ ...formData, country: value })
        }
      >
        <SelectTrigger className="w-full">
          <SelectValue>
            {formData.country
              ? memoizedCountries.find((c) => c.code === formData.country)?.name
              : "Select a country"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="fixed">
          <List
            height={200}
            itemCount={memoizedCountries.length}
            itemSize={40}
            width="100%"
          >
            {Row}
          </List>
        </SelectContent>
      </Select>
    </div>
    <div className="space-y-2">
      <Label htmlFor="address">Address</Label>
      <Input
        id="address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="city">City</Label>
      <Input
        id="city"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="state">State</Label>
      <Input
        id="state"
        value={formData.state}
        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="zipCode">ZIP Code</Label>
      <Input
        id="zipCode"
        value={formData.zipCode}
        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
      />
    </div>
  </div>
);

  const Step4 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="profilePicture">Profile Picture</Label>
        <Input
          id="profilePicture"
          type="file"
          accept="image/*"
          onChange={() => setFormData({ ...formData, profilePicture: null })}
        />
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Step {step} of 4</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}
            <div className="mt-6 flex justify-between">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </Button>
              )}
              <Button type="submit">
                {step === 4 ? 'Create Account' : 'Next'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}



export default Register;
