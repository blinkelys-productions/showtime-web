import axios from "axios";
import { apiBase } from "@/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

function Login() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        
        try {
            const response = await axios.post(`${apiBase}/api/auth/login`, {
                email,
                password
            });
            
            if (response.data) {
                console.log('Login successful', response.data);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Input 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Email"
                                required 
                                className="w-full"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Password"
                                required 
                                className="w-full"
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login;