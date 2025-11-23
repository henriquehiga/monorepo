export type ApiResponseModel = {
    status: 'success' | 'error';
    data: {
        message: string;
        timestamp: number;
    }
}
